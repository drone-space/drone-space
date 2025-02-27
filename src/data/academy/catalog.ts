import { images } from '@/assets/images';
import { generateUUID } from '@/utilities/generators/id';

export const catalogue = [
  {
    image: images.gallery.graduation.yr2022.image3,
    id: generateUUID(),
    title: 'How to Get Started With iSpring Learn',
    progress: 11,
    inProgress: true,
  },
  {
    image: images.gallery.graduation.yr2022.image6,
    id: generateUUID(),
    title: 'How to Create a Course in iSpring Learn',
    progress: 100,
    inProgress: false,
  },
];
