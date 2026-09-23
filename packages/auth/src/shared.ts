import { COMPANY_NAME } from '@repo/constants';
import { ProfileGet } from '@repo/types';
import { emailSendOnboarding, emailContactAdd } from '@repo/email';
import { isProduction, segmentFullName } from '@repo/utils';
import { db } from '@repo/db';

export const sharedUserHandle = async (props: {
  supabase: any;
  profile?: ProfileGet;
  existed: boolean;
}) => {
  const { supabase, profile, existed } = props;

  const name = `${profile?.firstName || ''} ${profile?.lastName || ''}`.trim();

  // update user
  const {
    data: { user: userData },
    error: updateError,
  } = await supabase.auth.updateUser({
    data: {
      name,
      full_name: name,
      avatar_url: profile?.avatar,
      user_name: profile?.userName,
    },
  });

  if (updateError) throw updateError;

  if (isProduction()) {
    if (!existed && userData && userData.email) {
      await emailSendOnboarding({
        to: userData.email,
        userName: profile?.userName || userData.email,
        appName: COMPANY_NAME,
      });

      const segmentName = segmentFullName(userData.user_metadata.name);

      await emailContactAdd(
        { email: userData.email, fname: segmentName.first, lname: segmentName.last },
        false,
      );
    }
  }
};

export const findSrplRecord = async (srpl: string, email: string) => {
  const existingSrpl = await db.srpl.findUnique({
    where: { srplNumber: srpl },
  });

  if (!existingSrpl) {
    return "The ID/Passport Number you provided doesn't exist in our records.";
  }

  // 1. If already linked to another profile
  if (existingSrpl.profileId) {
    const existingProfile = await db.profile.findUnique({
      where: { id: existingSrpl.profileId },
    });

    if (existingProfile?.email !== email) {
      return 'This ID/Passport Number is already linked to another account.';
    }
  }

  // 2. If not yet linked, check if a profile with the given email exists to link them
  const profileToLink = await db.profile.findUnique({
    where: { email },
  });

  if (profileToLink) {
    await db.srpl.update({
      where: { srplNumber: srpl },
      data: { profileId: profileToLink.id },
    });
  }
};

export const linkSrplToProfile = async (srpl: string, profile: ProfileGet) => {
  const existingSrpl = await db.srpl.findUnique({
    where: { srplNumber: srpl },
  });

  // 1. Guard: Record doesn't exist
  if (!existingSrpl) {
    return {
      success: false,
      error: "The ID/Passport Number provided doesn't exist in our records.",
    };
  }

  // 2. Guard: Already linked to a DIFFERENT profile
  if (existingSrpl.profileId && existingSrpl.profileId !== profile.id) {
    return {
      success: false,
      error: 'This ID/Passport Number is already linked to another account.',
    };
  }

  // 3. Link if not already linked
  if (!existingSrpl.profileId) {
    await db.srpl.update({
      where: { srplNumber: srpl },
      data: { profileId: profile.id },
    });
  }

  return { success: true };
};
