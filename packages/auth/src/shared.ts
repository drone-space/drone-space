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
  return await db.$transaction(async (tx) => {
    const existingSrpl = await tx.srpl.findUnique({
      where: { srplNumber: srpl },
    });

    if (!existingSrpl) {
      return "The ID/Passport Number you provided doesn't exist in our records.";
    }

    const existingProfile = await tx.profile.findUnique({
      where: { email },
    });

    if (!existingProfile) {
      return;
    }

    if (!existingSrpl.profileId) {
      await tx.srpl.update({
        where: { srplNumber: srpl },
        data: { profileId: existingProfile.id },
      });
    } else {
      // If profileId is present, but it's linked to a different profile
      if (existingSrpl.profileId !== existingProfile.id) {
        return 'This ID/Passport Number is already linked to another profile.';
      }
    }

    return;
  });
};

export const linkSrplToProfile = async (srpl: string, profile: ProfileGet) => {
  return await db.$transaction(async (tx) => {
    const existingSrpl = await tx.srpl.findUnique({
      where: { srplNumber: srpl },
    });

    if (!existingSrpl) {
      console.error("The ID/Passport Number provided doesn't exist in our records.");
      return;
    }

    if (!existingSrpl.profileId) {
      await tx.srpl.update({
        where: { srplNumber: srpl },
        data: { profileId: profile.id },
      });
    } else {
      // If profileId is present, but it's linked to a different profile
      if (existingSrpl.profileId !== profile.id) {
        return 'This ID/Passport Number is already linked to another profile.';
      }
    }

    return;
  });
};
