import { HOSTED_BASE_URL } from '@repo/constants/paths';

const baseUrl = `${HOSTED_BASE_URL.CLIENT_WEB}/videos`;

const videos = {
  hero: {
    home: {
      video1: `${baseUrl}/hero/home/video-1.mp4`,
    },
    lightShow: {
      video1: `${baseUrl}/hero/light-show/video-1.mp4`,
    },
  },

  video1: `${baseUrl}/video-1.mp4`,
};

export default videos;
