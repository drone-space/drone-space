const baseUrl = `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/documents`;

const documents = {
  droneSpace: {
    brochure: `${baseUrl}/drone-space/brochure.pdf`,
    profile: `${baseUrl}/drone-space/profile.pdf`,
  },
};

export default documents;
