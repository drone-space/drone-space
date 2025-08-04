'use server';

import prisma from '@/libraries/prisma';
import { PostRelations } from '@/types/models/post';

export const postGet = async (params: {
  postId: string;
}): Promise<{ data: PostRelations } | null> => {
  try {
    const postRecord = await prisma.post.findUnique({
      where: { id: params.postId },

      include: {
        _count: { select: { comments: true } },

        category: true,
        tags: true,
        profile: true,
      },
    });

    if (!postRecord) {
      throw new Error('Post not found');
    }

    return { data: postRecord };
  } catch (error) {
    console.error('---> service error - (get post):', error);
    return null;
  }
};

export const postsGet = async (): Promise<{ data: PostRelations[] } | null> => {
  try {
    const postRecords = await prisma.post.findMany({
      include: {
        _count: { select: { comments: true } },

        category: true,
        tags: true,
        profile: true,
      },

      orderBy: { created_at: 'desc' },
    });

    if (!postRecords) {
      throw new Error('Posts not found');
    }

    return { data: postRecords };
  } catch (error) {
    console.error('---> service error - (get posts):', error);
    return null;
  }
};
