import { COMPANY_NAME } from '@repo/constants/app';
import { emailSendOnboarding } from '@repo/libraries/wrappers/email';
import { ProfileGet } from '@repo/types/models/profile';
import { emailContactAdd } from '../api/email/contacts';
import { segmentFullName } from '@repo/utilities/string';
import prisma from '@repo/libraries/prisma';

export const sharedUserHandle = async (props: {
  supabase: any;
  profile?: ProfileGet;
  existed: boolean;
}) => {
  const { supabase, profile, existed } = props;

  const name =
    `${profile?.first_name || ''} ${profile?.last_name || ''}`.trim();

  // update user
  const {
    data: { user: userData },
    error: updateError,
  } = await supabase.auth.updateUser({
    data: {
      name,
      full_name: name,
      avatar_url: profile?.avatar,
      user_name: profile?.user_name,
    },
  });

  if (updateError) throw updateError;

  if (!existed && userData && userData.email) {
    await emailSendOnboarding({
      to: userData.email,
      userName: profile?.user_name || userData.email,
      appName: COMPANY_NAME,
    });

    const nameSegment = segmentFullName(userData.user_metadata.name);

    await emailContactAdd(
      {
        email: userData.email,
        fname: nameSegment.first,
        lname: nameSegment.last,
      },
      false
    );
  }
};

export const findSrplRecord = async (srpl: string, email: string) => {
  return await prisma.$transaction(async (tx) => {
    const existingSrpl = await tx.srpl.findUnique({
      where: { srplNumber: srpl },
    });

    if (!existingSrpl) {
      return "The SRPL you provided doesn't exist in our records.";
    }

    const existingProfile = await tx.profile.findUnique({
      where: { email },
    });

    if (!existingProfile) {
      return;
    }

    if (!existingSrpl.profile_id) {
      await tx.srpl.update({
        where: { srplNumber: srpl },
        data: { profile_id: existingProfile.id },
      });
    } else {
      // If profile_id is present, but it's linked to a different profile
      if (existingSrpl.profile_id !== existingProfile.id) {
        return 'This SRPL is already linked to another profile.';
      }
    }

    return;
  });
};

export const linkSrplToProfile = async (srpl: string, profile: ProfileGet) => {
  return await prisma.$transaction(async (tx) => {
    const existingSrpl = await tx.srpl.findUnique({
      where: { srplNumber: srpl },
    });

    if (!existingSrpl) {
      console.error("The SRPL provided doesn't exist in our records.");
      return;
    }

    if (!existingSrpl.profile_id) {
      await tx.srpl.update({
        where: { srplNumber: srpl },
        data: { profile_id: profile.id },
      });
    } else {
      // If profile_id is present, but it's linked to a different profile
      if (existingSrpl.profile_id !== profile.id) {
        return 'This SRPL is already linked to another profile.';
      }
    }

    return;
  });
};
