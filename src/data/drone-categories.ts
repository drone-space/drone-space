import { images } from '@/assets/images';

export const droneCategories = [
  {
    title: 'Camera Drones',
    image: images.carousel.shop.image1,
    desc: 'Camera drones are small unmanned aerial vehicles with a camera attached. Primarily used for aerial photography and videography but can also be used for aerial inspections, thermal imaging, land surveying, and many other applications on a small scale.',
    anchor: { link: '/shop/drones/camera', label: 'Shop Now' },
    styles: {
      alignment: 'start',
    },
  },
  {
    title: 'Enterprise Drones',
    image: images.carousel.shop.image2,
    desc: 'Enterprise drones introduce advanced data capture capabilities, encompassing high-resolution imagery, LiDAR scanning, and thermal imaging. These capabilities empower businesses to amass detailed and actionable insights efficiently over expansive areas. Processed through specialized software, the collected data can yield precise maps, 3D models, and a range of analytics on a large scale.',
    anchor: { link: '/shop/drones/enterprise', label: 'Shop Now' },
    styles: {
      alignment: 'end',
    },
  },
  {
    title: 'Agriculture Drones',
    image: images.carousel.shop.image3,
    desc: 'Agriculture drones are used to monitor and manage the growth of crops, land area, and overall agricultural aspects. These drones also have special cameras, advanced sensors, and automated data-capturing capabilities that can help farmers record any data related to crop growth, weather conditions, and more. Used for pesticide spraying equipment, monitoring, reinforcing-checking and measuring damage from animals.',
    anchor: { link: '/shop/drones/agriculture', label: 'Shop Now' },
    styles: {
      alignment: 'end',
    },
  },
];
