const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/documents`;

const documents = {
  droneSpace: {
    brochure: `${baseUrl}/drone-space/brochure.pdf`,
    profile: `${baseUrl}/drone-space/profile.pdf`,
  },
};

export default documents;
