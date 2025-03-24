import { generateUUID } from '@/utilities/generators/id';

const sampleSentence =
  'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis.';

const sampleProse =
  'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.';

const sample = {
  text: { sentence: sampleSentence, prose: sampleProse },
};

export default sample;

export const records = [
  {
    id: generateUUID(),
    title: 'How to Organize a Meeting',
    type: 'page',
    enrollments: [
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
        name: 'Harriette Spoonlicker',
        email: 'jane@example.com',
      },
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
      {
        avatar: null,
        name: 'John Doe',
        email: 'mike@example.com',
      },
    ],
    createdBy: 'jane',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: generateUUID(),
    title: 'My Course 1',
    type: 'page',
    enrollments: [
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
        name: 'Harriette Spoonlicker',
        email: 'jane@example.com',
      },
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
      {
        avatar: null,
        name: 'John Doe',
        email: 'mike@example.com',
      },
    ],
    createdBy: 'jane',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
  },
  {
    id: generateUUID(),
    title: 'New Assignment',
    type: 'page',
    enrollments: [
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
        name: 'Harriette Spoonlicker',
        email: 'jane@example.com',
      },
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
    ],
    createdBy: 'jane',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
  {
    id: generateUUID(),
    title: 'Random File',
    type: 'page',
    enrollments: [
      {
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
        name: 'Michael Bay',
        email: 'mike@example.com',
      },
      {
        avatar: null,
        name: 'John Doe',
        email: 'mike@example.com',
      },
    ],
    createdBy: 'jane',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1),
  },
];

export const collaborators = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Harriette Spoonlicker',
    role: 'Student',
    email: 'jane@example.com',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    name: 'Michael Bay',
    role: 'Instructor',
    email: 'mike@example.com',
  },
  {
    avatar: null,
    name: 'John Doe',
    role: 'Student',
    email: 'mike@example.com',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Emma Darcy',
    role: 'Admin',
    email: 'emma@example.com',
  },
];
