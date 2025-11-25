import {
  HOSTED_BASE_URL,
  REMOTE_HOSTED_BASE_URLS,
} from '@repo/constants/paths';

const iconUrl = `https://img.icons8.com`;
const baseUrl = {
  droneSpace: `${HOSTED_BASE_URL.CLIENT_WEB}/images`,
  conference: `${REMOTE_HOSTED_BASE_URLS.AI_CONFERENCE}/images`,
};

export const images = {
  icons: {
    social: {
      facebook: `${iconUrl}/fluency/96/facebook.png`,
      instagram: `${iconUrl}/fluency/96/instagram-new.png`,
      twitterx: `${iconUrl}/color/96/twitterx--v1.png`,
      linkedin: `${iconUrl}/fluency/96/linkedin.png`,
      whatsapp: `${iconUrl}/color/96/whatsapp--v1.png`,
    },

    google: `${iconUrl}/fluency/96/google-logo.png`,
    credentials: `${iconUrl}/material-rounded/96/mail.png`,
    openAi: `${iconUrl}/fluency/100/chatgpt--v2.png`,
  },

  web: {
    hero: {
      dark: `${baseUrl.droneSpace}/web/hero-banner-dark.webp`,
      light: `${baseUrl.droneSpace}/web/hero-banner-light.webp`,
    },
    newsletter: `${baseUrl.droneSpace}/web/newsletter-banner.webp`,
    drone: `${baseUrl.droneSpace}/web/drone-banner.webp`,
    rpl: {
      dark: `${baseUrl.droneSpace}/web/rpl-banner-dark.webp`,
      light: `${baseUrl.droneSpace}/web/rpl-banner-light.webp`,
    },
  },

  brand: {
    droneSpace: {
      icon: {
        black: `${baseUrl.droneSpace}/brand/icon/black.png`,
        default: `${baseUrl.droneSpace}/brand/icon/default.png`,
        white: `${baseUrl.droneSpace}/brand/icon/white.png`,
      },
      wording: {
        black: `${baseUrl.droneSpace}/brand/wording/black.png`,
        default: `${baseUrl.droneSpace}/brand/wording/default.png`,
        white: `${baseUrl.droneSpace}/brand/wording/white.png`,
      },
      logo: {
        landscape: {
          black: `${baseUrl.droneSpace}/brand/logo/landscape/black.png`,
          default: `${baseUrl.droneSpace}/brand/logo/landscape/default.png`,
          white: `${baseUrl.droneSpace}/brand/logo/landscape/white.png`,
        },
        potrait: {
          black: `${baseUrl.droneSpace}/brand/logo/potrait/black.png`,
          default: `${baseUrl.droneSpace}/brand/logo/potrait/default.png`,
          white: `${baseUrl.droneSpace}/brand/logo/potrait/white.png`,
          meta: `${baseUrl.droneSpace}/brand/logo/potrait/meta.png`,
        },
      },
    },
    conference: {
      icon: {
        dark: `${baseUrl.conference}/brand/icon/dark.png`,
        light: `${baseUrl.conference}/brand/icon/light.png`,
      },
      logo: {
        landscape: {
          dark: `${baseUrl.conference}/brand/logo/landscape/dark.png`,
          light: `${baseUrl.conference}/brand/logo/landscape/light.png`,
        },
        potrait: {
          dark: `${baseUrl.conference}/brand/logo/potrait/dark.png`,
          light: `${baseUrl.conference}/brand/logo/potrait/light.png`,
        },
      },
    },
  },

  blogs: {
    yr2023: {
      b0831: {
        image1: `${baseUrl.droneSpace}/blog/23-08-31/image-1.webp`,
        image2: `${baseUrl.droneSpace}/blog/23-08-31/image-2.webp`,
        image3: `${baseUrl.droneSpace}/blog/23-08-31/image-3.webp`,
      },
      b1012: {
        image1: `${baseUrl.droneSpace}/blog/32-10-12/image-1.webp`,
        image2: `${baseUrl.droneSpace}/blog/32-10-12/image-2.webp`,
        image3: `${baseUrl.droneSpace}/blog/32-10-12/image-3.webp`,
        image4: `${baseUrl.droneSpace}/blog/32-10-12/image-4.webp`,
      },
    },
  },

  carousel: {
    shop: {
      image1: `${baseUrl.droneSpace}/carousel/shop/image-1.webp`,
      image2: `${baseUrl.droneSpace}/carousel/shop/image-2.webp`,
      image3: `${baseUrl.droneSpace}/carousel/shop/image-3.webp`,
      image4: `${baseUrl.droneSpace}/carousel/shop/image-4.webp`,
      image5: `${baseUrl.droneSpace}/carousel/shop/image-5.webp`,
      image6: `${baseUrl.droneSpace}/carousel/shop/image-6.webp`,
    },
  },

  alumni: {
    image1: `${baseUrl.droneSpace}/alumni/image-1.webp`,
    image2: `${baseUrl.droneSpace}/alumni/image-2.webp`,
    image3: `${baseUrl.droneSpace}/alumni/image-3.webp`,
    image4: `${baseUrl.droneSpace}/alumni/image-4.webp`,
  },

  courses: {
    fixWin: `${baseUrl.droneSpace}/courses/image-1.webp`,
    mulRotr: `${baseUrl.droneSpace}/courses/image-2.webp`,
    bvlos: `${baseUrl.droneSpace}/courses/image-3.webp`,
    insRat: `${baseUrl.droneSpace}/courses/image-4.webp`,
    mapSur: `${baseUrl.droneSpace}/courses/image-5.webp`,
    thermography: `${baseUrl.droneSpace}/courses/image-6.webp`,
    radioTelephony: `${baseUrl.droneSpace}/courses/image-7.webp`,
    holCam: `${baseUrl.droneSpace}/courses/image-8.webp`,
  },

  gallery: {
    conference: {
      yr2022: {
        image1: `${baseUrl.conference}/gallery/conference/yr2022/image-1.webp`,
        image2: `${baseUrl.conference}/gallery/conference/yr2022/image-2.webp`,
        image3: `${baseUrl.conference}/gallery/conference/yr2022/image-3.webp`,
        image4: `${baseUrl.conference}/gallery/conference/yr2022/image-4.webp`,
        image5: `${baseUrl.conference}/gallery/conference/yr2022/image-5.webp`,
      },
      yr2024: {
        image1: `${baseUrl.conference}/gallery/conference/yr2024/conference-1.webp`,
        image2: `${baseUrl.conference}/gallery/conference/yr2024/conference-2.webp`,
        image3: `${baseUrl.conference}/gallery/conference/yr2024/conference-3.webp`,
        image4: `${baseUrl.conference}/gallery/conference/yr2024/conference-4.webp`,
        image5: `${baseUrl.conference}/gallery/conference/yr2024/conference-5.webp`,
        image6: `${baseUrl.conference}/gallery/conference/yr2024/conference-6.webp`,
        image7: `${baseUrl.conference}/gallery/conference/yr2024/conference-7.webp`,
        image8: `${baseUrl.conference}/gallery/conference/yr2024/conference-8.webp`,
        image9: `${baseUrl.conference}/gallery/conference/yr2024/conference-9.webp`,
        image10: `${baseUrl.conference}/gallery/conference/yr2024/conference-10.webp`,
        image11: `${baseUrl.conference}/gallery/conference/yr2024/conference-11.webp`,
        image12: `${baseUrl.conference}/gallery/conference/yr2024/conference-12.webp`,
        image13: `${baseUrl.conference}/gallery/conference/yr2024/conference-13.webp`,
        image14: `${baseUrl.conference}/gallery/conference/yr2024/conference-14.webp`,
        image15: `${baseUrl.conference}/gallery/conference/yr2024/conference-15.webp`,
        image16: `${baseUrl.conference}/gallery/conference/yr2024/conference-16.webp`,
        image17: `${baseUrl.conference}/gallery/conference/yr2024/conference-17.webp`,
        image18: `${baseUrl.conference}/gallery/conference/yr2024/conference-18.webp`,
        image19: `${baseUrl.conference}/gallery/conference/yr2024/conference-19.webp`,
        image20: `${baseUrl.conference}/gallery/conference/yr2024/conference-20.webp`,
        image21: `${baseUrl.conference}/gallery/conference/yr2024/conference-21.webp`,
        image22: `${baseUrl.conference}/gallery/conference/yr2024/conference-22.webp`,
        image23: `${baseUrl.conference}/gallery/conference/yr2024/conference-23.webp`,
        image24: `${baseUrl.conference}/gallery/conference/yr2024/conference-24.webp`,
        image25: `${baseUrl.conference}/gallery/conference/yr2024/conference-25.webp`,
        image26: `${baseUrl.conference}/gallery/conference/yr2024/conference-26.webp`,
        image27: `${baseUrl.conference}/gallery/conference/yr2024/conference-27.webp`,
        image28: `${baseUrl.conference}/gallery/conference/yr2024/conference-28.webp`,
        image29: `${baseUrl.conference}/gallery/conference/yr2024/conference-29.webp`,
        image30: `${baseUrl.conference}/gallery/conference/yr2024/conference-30.webp`,
        image31: `${baseUrl.conference}/gallery/conference/yr2024/conference-31.webp`,
        image32: `${baseUrl.conference}/gallery/conference/yr2024/conference-32.webp`,
        image33: `${baseUrl.conference}/gallery/conference/yr2024/conference-33.webp`,
        image34: `${baseUrl.conference}/gallery/conference/yr2024/conference-34.webp`,
        image35: `${baseUrl.conference}/gallery/conference/yr2024/conference-35.webp`,
        image36: `${baseUrl.conference}/gallery/conference/yr2024/conference-36.webp`,
        image37: `${baseUrl.conference}/gallery/conference/yr2024/conference-37.webp`,
        image38: `${baseUrl.conference}/gallery/conference/yr2024/conference-38.webp`,
        image39: `${baseUrl.conference}/gallery/conference/yr2024/conference-39.webp`,
        image40: `${baseUrl.conference}/gallery/conference/yr2024/conference-40.webp`,
        image41: `${baseUrl.conference}/gallery/conference/yr2024/conference-41.webp`,
        image42: `${baseUrl.conference}/gallery/conference/yr2024/conference-42.webp`,
        image43: `${baseUrl.conference}/gallery/conference/yr2024/conference-43.webp`,
        image44: `${baseUrl.conference}/gallery/conference/yr2024/conference-44.webp`,
        image45: `${baseUrl.conference}/gallery/conference/yr2024/conference-45.webp`,
        image46: `${baseUrl.conference}/gallery/conference/yr2024/conference-46.webp`,
        image47: `${baseUrl.conference}/gallery/conference/yr2024/conference-47.webp`,
        image48: `${baseUrl.conference}/gallery/conference/yr2024/conference-48.webp`,
        image49: `${baseUrl.conference}/gallery/conference/yr2024/conference-49.webp`,
        image50: `${baseUrl.conference}/gallery/conference/yr2024/conference-50.webp`,
        image51: `${baseUrl.conference}/gallery/conference/yr2024/conference-51.webp`,
        image52: `${baseUrl.conference}/gallery/conference/yr2024/conference-52.webp`,
        image53: `${baseUrl.conference}/gallery/conference/yr2024/conference-53.webp`,
        image54: `${baseUrl.conference}/gallery/conference/yr2024/conference-54.webp`,
        image55: `${baseUrl.conference}/gallery/conference/yr2024/conference-55.webp`,
        image56: `${baseUrl.conference}/gallery/conference/yr2024/conference-56.webp`,
        image57: `${baseUrl.conference}/gallery/conference/yr2024/conference-57.webp`,
        image58: `${baseUrl.conference}/gallery/conference/yr2024/conference-58.webp`,
        image59: `${baseUrl.conference}/gallery/conference/yr2024/conference-59.webp`,
        image60: `${baseUrl.conference}/gallery/conference/yr2024/conference-60.webp`,
        image61: `${baseUrl.conference}/gallery/conference/yr2024/conference-61.webp`,
        image62: `${baseUrl.conference}/gallery/conference/yr2024/conference-62.webp`,
        image63: `${baseUrl.conference}/gallery/conference/yr2024/conference-63.webp`,
        image64: `${baseUrl.conference}/gallery/conference/yr2024/conference-64.webp`,
        image65: `${baseUrl.conference}/gallery/conference/yr2024/conference-65.webp`,
        image66: `${baseUrl.conference}/gallery/conference/yr2024/conference-66.webp`,
        image67: `${baseUrl.conference}/gallery/conference/yr2024/conference-67.webp`,
        image68: `${baseUrl.conference}/gallery/conference/yr2024/conference-68.webp`,
        image69: `${baseUrl.conference}/gallery/conference/yr2024/conference-69.webp`,
        image70: `${baseUrl.conference}/gallery/conference/yr2024/conference-70.webp`,
        image71: `${baseUrl.conference}/gallery/conference/yr2024/conference-71.webp`,
        image72: `${baseUrl.conference}/gallery/conference/yr2024/conference-72.webp`,
        image73: `${baseUrl.conference}/gallery/conference/yr2024/conference-73.webp`,
        image74: `${baseUrl.conference}/gallery/conference/yr2024/conference-74.webp`,
        image75: `${baseUrl.conference}/gallery/conference/yr2024/conference-75.webp`,
        image76: `${baseUrl.conference}/gallery/conference/yr2024/conference-76.webp`,
        image77: `${baseUrl.conference}/gallery/conference/yr2024/conference-77.webp`,
        image78: `${baseUrl.conference}/gallery/conference/yr2024/conference-78.webp`,
        image79: `${baseUrl.conference}/gallery/conference/yr2024/conference-79.webp`,
        image80: `${baseUrl.conference}/gallery/conference/yr2024/conference-80.webp`,
        image81: `${baseUrl.conference}/gallery/conference/yr2024/conference-81.webp`,
        image82: `${baseUrl.conference}/gallery/conference/yr2024/conference-82.webp`,
        image83: `${baseUrl.conference}/gallery/conference/yr2024/conference-83.webp`,
        image84: `${baseUrl.conference}/gallery/conference/yr2024/conference-84.webp`,
        image85: `${baseUrl.conference}/gallery/conference/yr2024/conference-85.webp`,
        image86: `${baseUrl.conference}/gallery/conference/yr2024/conference-86.webp`,
        image87: `${baseUrl.conference}/gallery/conference/yr2024/conference-87.webp`,
        image88: `${baseUrl.conference}/gallery/conference/yr2024/conference-88.webp`,
        image89: `${baseUrl.conference}/gallery/conference/yr2024/conference-89.webp`,
        image90: `${baseUrl.conference}/gallery/conference/yr2024/conference-90.webp`,
        image91: `${baseUrl.conference}/gallery/conference/yr2024/conference-91.webp`,
        image92: `${baseUrl.conference}/gallery/conference/yr2024/conference-92.webp`,
        image93: `${baseUrl.conference}/gallery/conference/yr2024/conference-93.webp`,
        image94: `${baseUrl.conference}/gallery/conference/yr2024/conference-94.webp`,
        image95: `${baseUrl.conference}/gallery/conference/yr2024/conference-95.webp`,
        image96: `${baseUrl.conference}/gallery/conference/yr2024/conference-96.webp`,
        image97: `${baseUrl.conference}/gallery/conference/yr2024/conference-97.webp`,
        image98: `${baseUrl.conference}/gallery/conference/yr2024/conference-98.webp`,
        image99: `${baseUrl.conference}/gallery/conference/yr2024/conference-99.webp`,
        image100: `${baseUrl.conference}/gallery/conference/yr2024/conference-100.webp`,
        image101: `${baseUrl.conference}/gallery/conference/yr2024/conference-101.webp`,
        image102: `${baseUrl.conference}/gallery/conference/yr2024/conference-102.webp`,
        image103: `${baseUrl.conference}/gallery/conference/yr2024/conference-103.webp`,
        image104: `${baseUrl.conference}/gallery/conference/yr2024/conference-104.webp`,
        image105: `${baseUrl.conference}/gallery/conference/yr2024/conference-105.webp`,
        image106: `${baseUrl.conference}/gallery/conference/yr2024/conference-106.webp`,
        image107: `${baseUrl.conference}/gallery/conference/yr2024/conference-107.webp`,
        image108: `${baseUrl.conference}/gallery/conference/yr2024/conference-108.webp`,
        image109: `${baseUrl.conference}/gallery/conference/yr2024/conference-109.webp`,
        image110: `${baseUrl.conference}/gallery/conference/yr2024/conference-110.webp`,
        image111: `${baseUrl.conference}/gallery/conference/yr2024/conference-111.webp`,
        image112: `${baseUrl.conference}/gallery/conference/yr2024/conference-112.webp`,
        image113: `${baseUrl.conference}/gallery/conference/yr2024/conference-113.webp`,
        image114: `${baseUrl.conference}/gallery/conference/yr2024/conference-114.webp`,
        image115: `${baseUrl.conference}/gallery/conference/yr2024/conference-115.webp`,
        image116: `${baseUrl.conference}/gallery/conference/yr2024/conference-116.webp`,
        image117: `${baseUrl.conference}/gallery/conference/yr2024/conference-117.webp`,
        image118: `${baseUrl.conference}/gallery/conference/yr2024/conference-118.webp`,
        image119: `${baseUrl.conference}/gallery/conference/yr2024/conference-119.webp`,
        image120: `${baseUrl.conference}/gallery/conference/yr2024/conference-120.webp`,
        image121: `${baseUrl.conference}/gallery/conference/yr2024/conference-121.webp`,
        image122: `${baseUrl.conference}/gallery/conference/yr2024/conference-122.webp`,
        image123: `${baseUrl.conference}/gallery/conference/yr2024/conference-123.webp`,
        image124: `${baseUrl.conference}/gallery/conference/yr2024/conference-124.webp`,
        image125: `${baseUrl.conference}/gallery/conference/yr2024/conference-125.webp`,
        image126: `${baseUrl.conference}/gallery/conference/yr2024/conference-126.webp`,
        image127: `${baseUrl.conference}/gallery/conference/yr2024/conference-127.webp`,
        image128: `${baseUrl.conference}/gallery/conference/yr2024/conference-128.webp`,
        image129: `${baseUrl.conference}/gallery/conference/yr2024/conference-129.webp`,
        image130: `${baseUrl.conference}/gallery/conference/yr2024/conference-130.webp`,
        image131: `${baseUrl.conference}/gallery/conference/yr2024/conference-131.webp`,
        image132: `${baseUrl.conference}/gallery/conference/yr2024/conference-132.webp`,
        image133: `${baseUrl.conference}/gallery/conference/yr2024/conference-133.webp`,
        image134: `${baseUrl.conference}/gallery/conference/yr2024/conference-134.webp`,
        image135: `${baseUrl.conference}/gallery/conference/yr2024/conference-135.webp`,
        image136: `${baseUrl.conference}/gallery/conference/yr2024/conference-136.webp`,
        image137: `${baseUrl.conference}/gallery/conference/yr2024/conference-137.webp`,
        image138: `${baseUrl.conference}/gallery/conference/yr2024/conference-138.webp`,
        image139: `${baseUrl.conference}/gallery/conference/yr2024/conference-139.webp`,
        image140: `${baseUrl.conference}/gallery/conference/yr2024/conference-140.webp`,
        image141: `${baseUrl.conference}/gallery/conference/yr2024/conference-141.webp`,
        image142: `${baseUrl.conference}/gallery/conference/yr2024/conference-142.webp`,
        image143: `${baseUrl.conference}/gallery/conference/yr2024/conference-143.webp`,
        image144: `${baseUrl.conference}/gallery/conference/yr2024/conference-144.webp`,
      },
    },

    expo: {
      yr2022: {
        image1: `${baseUrl.conference}/gallery/expo/yr2022/image-1.webp`,
        image2: `${baseUrl.conference}/gallery/expo/yr2022/image-2.webp`,
        image3: `${baseUrl.conference}/gallery/expo/yr2022/image-3.webp`,
        image4: `${baseUrl.conference}/gallery/expo/yr2022/image-4.webp`,
        image5: `${baseUrl.conference}/gallery/expo/yr2022/image-5.webp`,
        image6: `${baseUrl.conference}/gallery/expo/yr2022/image-6.webp`,
        image7: `${baseUrl.conference}/gallery/expo/yr2022/image-7.webp`,
        image8: `${baseUrl.conference}/gallery/expo/yr2022/image-8.webp`,
        image9: `${baseUrl.conference}/gallery/expo/yr2022/image-9.webp`,
        image10: `${baseUrl.conference}/gallery/expo/yr2022/image-10.webp`,
        image11: `${baseUrl.conference}/gallery/expo/yr2022/image-11.webp`,
        image12: `${baseUrl.conference}/gallery/expo/yr2022/image-12.webp`,
        image13: `${baseUrl.conference}/gallery/expo/yr2022/image-13.webp`,
        image14: `${baseUrl.conference}/gallery/expo/yr2022/image-14.webp`,
        image15: `${baseUrl.conference}/gallery/expo/yr2022/image-15.webp`,
      },
      yr2024: {
        image1: `${baseUrl.conference}/gallery/expo/yr2024/expo-1.webp`,
        image2: `${baseUrl.conference}/gallery/expo/yr2024/expo-2.webp`,
        image3: `${baseUrl.conference}/gallery/expo/yr2024/expo-3.webp`,
        image4: `${baseUrl.conference}/gallery/expo/yr2024/expo-4.webp`,
        image5: `${baseUrl.conference}/gallery/expo/yr2024/expo-5.webp`,
        image6: `${baseUrl.conference}/gallery/expo/yr2024/expo-6.webp`,
        image7: `${baseUrl.conference}/gallery/expo/yr2024/expo-7.webp`,
        image8: `${baseUrl.conference}/gallery/expo/yr2024/expo-8.webp`,
        image9: `${baseUrl.conference}/gallery/expo/yr2024/expo-9.webp`,
        image10: `${baseUrl.conference}/gallery/expo/yr2024/expo-10.webp`,
        image11: `${baseUrl.conference}/gallery/expo/yr2024/expo-11.webp`,
        image12: `${baseUrl.conference}/gallery/expo/yr2024/expo-12.webp`,
        image13: `${baseUrl.conference}/gallery/expo/yr2024/expo-13.webp`,
        image14: `${baseUrl.conference}/gallery/expo/yr2024/expo-14.webp`,
        image15: `${baseUrl.conference}/gallery/expo/yr2024/expo-15.webp`,
        image16: `${baseUrl.conference}/gallery/expo/yr2024/expo-16.webp`,
        image17: `${baseUrl.conference}/gallery/expo/yr2024/expo-17.webp`,
        image18: `${baseUrl.conference}/gallery/expo/yr2024/expo-18.webp`,
        image19: `${baseUrl.conference}/gallery/expo/yr2024/expo-19.webp`,
        image20: `${baseUrl.conference}/gallery/expo/yr2024/expo-20.webp`,
        image21: `${baseUrl.conference}/gallery/expo/yr2024/expo-21.webp`,
        image22: `${baseUrl.conference}/gallery/expo/yr2024/expo-22.webp`,
        image23: `${baseUrl.conference}/gallery/expo/yr2024/expo-23.webp`,
        image24: `${baseUrl.conference}/gallery/expo/yr2024/expo-24.webp`,
        image25: `${baseUrl.conference}/gallery/expo/yr2024/expo-25.webp`,
        image26: `${baseUrl.conference}/gallery/expo/yr2024/expo-26.webp`,
        image27: `${baseUrl.conference}/gallery/expo/yr2024/expo-27.webp`,
        image28: `${baseUrl.conference}/gallery/expo/yr2024/expo-28.webp`,
        image29: `${baseUrl.conference}/gallery/expo/yr2024/expo-29.webp`,
        image30: `${baseUrl.conference}/gallery/expo/yr2024/expo-30.webp`,
        image31: `${baseUrl.conference}/gallery/expo/yr2024/expo-31.webp`,
        image32: `${baseUrl.conference}/gallery/expo/yr2024/expo-32.webp`,
        image33: `${baseUrl.conference}/gallery/expo/yr2024/expo-33.webp`,
        image34: `${baseUrl.conference}/gallery/expo/yr2024/expo-34.webp`,
        image35: `${baseUrl.conference}/gallery/expo/yr2024/expo-35.webp`,
        image36: `${baseUrl.conference}/gallery/expo/yr2024/expo-36.webp`,
      },
    },

    hackathon: {
      yr2024: {
        image1: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-1.webp`,
        image2: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-2.webp`,
        image3: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-3.webp`,
        image4: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-4.webp`,
        image5: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-5.webp`,
        image6: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-6.webp`,
        image7: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-7.webp`,
        image8: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-8.webp`,
        image9: `${baseUrl.conference}/gallery/hackathon/yr2024/hackathon-9.webp`,
      },
    },

    airfield: {
      image1: `${baseUrl.droneSpace}/gallery/airfield/image-1.webp`,
      image2: `${baseUrl.droneSpace}/gallery/airfield/image-2.webp`,
    },

    graduation: {
      yr2022: {
        image1: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-1.webp`,
        image2: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-2.webp`,
        image3: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-3.webp`,
        image4: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-4.webp`,
        image5: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-5.webp`,
        image6: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-6.webp`,
        image7: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-7.webp`,
        image8: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-8.webp`,
        image9: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-9.webp`,
        image10: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-10.webp`,
        image11: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-11.webp`,
        image12: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-12.webp`,
        image13: `${baseUrl.droneSpace}/gallery/graduation/yr2022/image-13.webp`,
      },
    },

    innovation: {
      jamuhuri: {
        yr2020: {
          image1: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-1.webp`,
          image2: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-2.webp`,
          image3: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-3.webp`,
          image4: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-4.webp`,
          image5: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-5.webp`,
          image6: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-6.webp`,
          image7: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-7.webp`,
          image8: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-8.webp`,
          image9: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-9.webp`,
          image10: `${baseUrl.droneSpace}/gallery/innovation-forum/jamuhuri/image-10.webp`,
        },
      },
    },

    projects: {
      project1: {
        image1: `${baseUrl.droneSpace}/gallery/projects/project-1/image-1.webp`,
        image2: `${baseUrl.droneSpace}/gallery/projects/project-1/image-2.webp`,
        image3: `${baseUrl.droneSpace}/gallery/projects/project-1/image-3.webp`,
        image4: `${baseUrl.droneSpace}/gallery/projects/project-1/image-4.webp`,
        image5: `${baseUrl.droneSpace}/gallery/projects/project-1/image-5.webp`,
        image6: `${baseUrl.droneSpace}/gallery/projects/project-1/image-6.webp`,
      },
    },
  },

  partners: {
    image1: `${baseUrl.droneSpace}/partners/image-1.webp`,
    image2: `${baseUrl.droneSpace}/partners/image-2.webp`,
    image3: `${baseUrl.droneSpace}/partners/image-3.webp`,
    image4: `${baseUrl.droneSpace}/partners/image-4.webp`,
    image5: `${baseUrl.droneSpace}/partners/image-5.webp`,
    image6: `${baseUrl.droneSpace}/partners/image-6.webp`,
    image7: `${baseUrl.droneSpace}/partners/image-7.webp`,
    image8: `${baseUrl.droneSpace}/partners/image-8.webp`,
    image9: `${baseUrl.droneSpace}/partners/image-9.webp`,
    image10: `${baseUrl.droneSpace}/partners/image-10.webp`,
    image11: `${baseUrl.droneSpace}/partners/image-11.webp`,
    image12: `${baseUrl.droneSpace}/partners/image-12.webp`,
    image13: `${baseUrl.droneSpace}/partners/image-13.webp`,
    image14: `${baseUrl.droneSpace}/partners/image-14.webp`,
    image15: `${baseUrl.droneSpace}/partners/image-15.webp`,
    image16: `${baseUrl.droneSpace}/partners/image-16.webp`,
    image17: `${baseUrl.droneSpace}/partners/image-17.webp`,
    image18: `${baseUrl.droneSpace}/partners/image-18.webp`,
    image19: `${baseUrl.droneSpace}/partners/image-19.webp`,
    image20: `${baseUrl.droneSpace}/partners/image-20.webp`,
    image21: `${baseUrl.droneSpace}/partners/image-21.webp`,
  },

  backgrounds: {
    cta: {
      newsletter: {
        primary: `${baseUrl.droneSpace}/backgrounds/cta/newsletter/primary.webp`,
        secondary: `${baseUrl.droneSpace}/backgrounds/cta/newsletter/secondary.webp`,
      },
    },
  },

  posters: {
    ads: {
      image1: `${baseUrl.droneSpace}/posters/ads/image-1.webp`,
      image2: `${baseUrl.droneSpace}/posters/ads/image-2.webp`,
    },

    conference: {
      poster1: {
        landscape: `${baseUrl.droneSpace}/posters/conference/image-1.jpg`,
        portrait: null,
      },
    },

    intakes: {
      camp: `${baseUrl.droneSpace}/posters/intakes/camp.webp`,
      mapping: `${baseUrl.droneSpace}/posters/intakes/mapping.webp`,
      monthly: `${baseUrl.droneSpace}/posters/intakes/monthly.webp`,
      radio: `${baseUrl.droneSpace}/posters/intakes/radio.webp`,
      rating: `${baseUrl.droneSpace}/posters/intakes/rating.webp`,
      workshop: {
        potrait: `${baseUrl.droneSpace}/posters/intakes/workshop/potrait.svg`,
        landscape: `${baseUrl.droneSpace}/posters/intakes/workshop/landscape.svg`,
      },
    },
  },

  products: {
    drones: {
      autel: {
        evo2: {
          drone: [
            `${baseUrl.droneSpace}/products/drones/autel/evo2/drone/drone-front.webp`,
            `${baseUrl.droneSpace}/products/drones/autel/evo2/drone/drone-skew.webp`,
            `${baseUrl.droneSpace}/products/drones/autel/evo2/drone/drone-folded.webp`,
          ],
          accessories: {
            battery: [
              `${baseUrl.droneSpace}/products/drones/autel/evo2/battery/battery-front.webp`,
              `${baseUrl.droneSpace}/products/drones/autel/evo2/battery/battery-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/autel/evo2/battery/battery-back.webp`,
              `${baseUrl.droneSpace}/products/drones/autel/evo2/battery/battery-side.webp`,
            ],
          },
        },
      },
      dji: {
        agras: {
          t40: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/agras/t40/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/agras/t40/drone/drone-skew.webp`,
            ],
            kit: {
              basic: `${baseUrl.droneSpace}/products/drones/dji/agras/t40/image-2.webp`,
              flyMore: null,
            },
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/agras/t40/battery/battery-skew.webp`,
              ],
              other: {
                spreader: [
                  `${baseUrl.droneSpace}/products/drones/dji/agras/t40/accessories/spreader.webp`,
                ],
                generator: [
                  `${baseUrl.droneSpace}/products/drones/dji/agras/t40/accessories/generator.webp`,
                ],
              },
            },
          },
          t50: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/agras/t50/drone/drone-front.webp`,
            ],
            kit: {
              basic: `${baseUrl.droneSpace}/products/drones/dji/agras/t50/image-2.webp`,
              flyMore: null,
            },
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/agras/t50/battery/battery-skew.webp`,
              ],
              other: {
                spreader: [
                  `${baseUrl.droneSpace}/products/drones/dji/agras/t50/accessories/spreader.webp`,
                ],
                generator: [
                  `${baseUrl.droneSpace}/products/drones/dji/agras/t50/accessories/generator.webp`,
                ],
              },
            },
          },
        },
        air: {
          air2s: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/air/2s/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/air/2s/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/air/2s/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/air/2s/drone/drone-folded.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/air/2s/drone/drone-top.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/air/2s/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/air/2s/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/air/2s/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/air/2s/battery/battery-side.webp`,
              ],
            },
          },
          air3: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/air/air3/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/air/air3/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/air/air3/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/air/air3/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/air/air3/drone/drone-folded.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/air/air3/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/air/air3/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/air/air3/battery/battery-side.webp`,
              ],
            },
          },
        },
        matrice: {
          matrice30t: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice30t/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice30t/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice30t/drone/drone-folded.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice30t/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice30t/battery/battery-side.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice30t/battery/battery-skew.webp`,
              ],
            },
          },
          matrice350: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice350/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice350/drone/drone-skew.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice350/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/matrice350/battery/battery-skew.webp`,
              ],
            },
          },
          m4e: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4e/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4e/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4e/drone/drone-side.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4e/drone/drone-back.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4e/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4e/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4e/battery/battery-side.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4e/battery/battery-skew.webp`,
              ],
            },
          },
          m4t: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4t/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4t/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4t/drone/drone-side.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4t/drone/drone-back.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4t/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4t/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4t/battery/battery-side.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4t/battery/battery-skew.webp`,
              ],
            },
          },
          m4dt: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4dt/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4dt/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4dt/drone/drone-side.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4dt/drone/drone-back.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4dt/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4dt/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4dt/battery/battery-side.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4dt/battery/battery-skew.webp`,
              ],
            },
          },
          m4d: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4d/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4d/drone/drone-top.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4d/battery/battery-side.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4d/battery/battery-skew.webp`,
              ],
            },
          },
          m4td: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4td/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/matrice/m4td/drone/drone-top.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4td/battery/battery-side.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/matrice/m4td/battery/battery-skew.webp`,
              ],
            },
          },
        },
        inspire: {
          inspire3: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/inspire/inspire3/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/inspire/inspire3/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/inspire/inspire3/drone/drone-side.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/inspire/inspire3/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/inspire/inspire3/battery/battery-side.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/inspire/inspire3/battery/battery-skew.webp`,
              ],
            },
          },
        },
        mavic: {
          m3c: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3c/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3c/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3c/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3c/drone/drone-folded.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3c/drone/drone-bottom.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3c/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3c/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3c/battery/battery-side.webp`,
              ],
            },
          },
          m3e: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3e/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3e/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3e/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3e/drone/drone-top.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3e/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3e/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3e/battery/battery-side.webp`,
              ],
            },
          },
          m3m: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/drone/drone-folded.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/battery/battery-side.webp`,
              ],
              other: {
                tripod: [
                  `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/accessories/rtk-tripod.webp`,
                  `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/accessories/rtk.webp`,
                  `${baseUrl.droneSpace}/products/drones/dji/mavic/3m/accessories/tripod.webp`,
                ],
              },
            },
          },
          m3pro: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3pro/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3pro/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3pro/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3pro/drone/drone-folded.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3pro/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3pro/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3pro/battery/battery-side.webp`,
              ],
            },
          },
          m4pro: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/mavic/4pro/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/4pro/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/4pro/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/4pro/drone/drone-folded.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/mavic/4pro/battery/battery-side.webp`,
              ],
            },
          },
          m3t: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3t/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3t/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3t/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mavic/3t/drone/drone-top.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3t/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3t/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mavic/3t/battery/battery-side.webp`,
              ],
            },
          },
        },
        mini: {
          m3pro: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/drone/drone-folded.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mini/3pro/battery/battery-side.webp`,
              ],
            },
          },
          m4pro: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/drone/drone-bottom.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/drone/drone-folded.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/battery/battery-front.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/mini/4pro/battery/battery-side.webp`,
              ],
            },
          },
          m5pro: {
            card: `${baseUrl.droneSpace}/products/drones/dji/mini/5pro/card.webp`,
          },
        },
        neo: {
          drone: [
            `${baseUrl.droneSpace}/products/drones/dji/neo/drone/drone-front.webp`,
            `${baseUrl.droneSpace}/products/drones/dji/neo/drone/drone-skew.webp`,
            `${baseUrl.droneSpace}/products/drones/dji/neo/drone/drone-bottom.webp`,
            `${baseUrl.droneSpace}/products/drones/dji/neo/drone/drone-top.webp`,
          ],
          accessories: {
            battery: [
              `${baseUrl.droneSpace}/products/drones/dji/neo/battery/battery-back.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/neo/battery/battery-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/neo/battery/battery-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/neo/battery/battery-side.webp`,
            ],
          },
        },
        avata: {
          avata2: {
            drone: [
              `${baseUrl.droneSpace}/products/drones/dji/avata/avata2/drone/drone-front.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/avata/avata2/drone/drone-skew.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/avata/avata2/drone/drone-top.webp`,
              `${baseUrl.droneSpace}/products/drones/dji/avata/avata2/drone/drone-back.webp`,
            ],
            accessories: {
              battery: [
                `${baseUrl.droneSpace}/products/drones/dji/avata/avata2/battery/battery-skew.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/avata/avata2/battery/battery-back.webp`,
                `${baseUrl.droneSpace}/products/drones/dji/avata/avata2/battery/battery-side.webp`,
              ],
            },
          },
        },
      },
      huida: {
        hd540s: {
          drone: [
            `${baseUrl.droneSpace}/products/drones/huida/hd540s/drone/drone-front.webp`,
            `${baseUrl.droneSpace}/products/drones/huida/hd540s/drone/drone-skew.webp`,
            `${baseUrl.droneSpace}/products/drones/huida/hd540s/drone/drone-top.webp`,
            `${baseUrl.droneSpace}/products/drones/huida/hd540s/drone/drone-folded.webp`,
          ],
          accessories: {
            battery: [
              `${baseUrl.droneSpace}/products/drones/huida/hd540s/battery/battery-skew.webp`,
            ],
            other: {
              spreader: [
                `${baseUrl.droneSpace}/products/drones/huida/hd540s/accessories/spreader.webp`,
              ],
              generator: [
                `${baseUrl.droneSpace}/products/drones/huida/hd540s/accessories/generator.webp`,
              ],
            },
          },
        },
      },
    },
  },

  services: {
    aerCin: `https://cdn.pixabay.com/photo/2018/07/31/23/56/drone-3576233_1280.jpg`,
    conRes: `${baseUrl.droneSpace}/services/image-2.webp`,
    solIns: `${baseUrl.droneSpace}/services/image-3.webp`,
    droSee: `https://cdn.pixabay.com/photo/2019/05/23/08/43/dji-4223416_960_720.jpg`,
    rocSup: `${baseUrl.droneSpace}/services/image-5.webp`,
    mappSur: `${baseUrl.droneSpace}/services/image-6.webp`,
    sar: `${baseUrl.droneSpace}/services/image-7.webp`,
    medical: `${baseUrl.droneSpace}/services/image-8.webp`,
  },

  shows: {
    brand1: `${baseUrl.droneSpace}/shows/brand-1.webp`,
    brand2: `${baseUrl.droneSpace}/shows/brand-2.webp`,
    ready: `${baseUrl.droneSpace}/shows/ready.webp`,
    understanding: `${baseUrl.droneSpace}/shows/understanding.webp`,
    hny: `${baseUrl.droneSpace}/shows/hny.webp`,
    talk: `${baseUrl.droneSpace}/shows/talk.webp`,
  },

  team: {
    tony: `${baseUrl.droneSpace}/team/image-1.webp`,
    nick: `${baseUrl.droneSpace}/team/image-2.webp`,
    priscah: `${baseUrl.droneSpace}/team/image-3.webp`,
    kevin: `${baseUrl.droneSpace}/team/image-4.webp`,
    michael: `${baseUrl.droneSpace}/team/image-5.webp`,
    hannah: `${baseUrl.droneSpace}/team/image-6.webp`,
  },

  training: {
    mulRot: `${baseUrl.droneSpace}/training/image-2.webp`,
    bvlos: `${baseUrl.droneSpace}/training/image-3.webp`,

    rpl: `https://cdn.pixabay.com/photo/2018/11/20/04/44/drone-3826482_1280.jpg`,
    radTel: `${baseUrl.droneSpace}/training/image-7.webp`,
    mapSur: `${baseUrl.droneSpace}/services/image-6.webp`,
    insRat: `${baseUrl.droneSpace}/training/image-4.webp`,
    thermography: `${baseUrl.droneSpace}/training/image-6.webp`,
    holCam: `${baseUrl.droneSpace}/training/image-8.webp`,
    agriSpray: `https://images.unsplash.com/photo-1713952152768-5f28b8093166?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
};
