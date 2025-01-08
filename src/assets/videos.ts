const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/videos`;

const videos = {
  hero: {
    home: {
      video1: `${baseUrl}/hero/home/video-1.mp4`,
    },
    lightShow: {
      video1: `${baseUrl}/hero/light-show/video-1.mp4`,
    },
  },

  video1: '/videos/video-1.mp4',
};

export default videos;
