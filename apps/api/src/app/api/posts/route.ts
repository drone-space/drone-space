import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { PostGet } from '@repo/types';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');

    const postRecords = await db.post.findMany({
      where: !userId ? undefined : { profileId: userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      { items: postRecords },
      { status: 200, statusText: 'Posts Retrieved' },
    );
  } catch (error) {
    console.error('---> route handler error (get posts):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const {
      posts,
      deletedIds,
    }: {
      posts: PostGet[];
      deletedIds?: string[];
    } = await request.json();

    // First handle explicit deletions if any exist
    if (deletedIds?.length) {
      await db.post.deleteMany({
        where: { id: { in: deletedIds } },
      });
    }

    // Prepare upsert operations
    const operations = posts.map((post) =>
      db.post.upsert({
        where: { id: post.id },
        update: {
          ...post,
          updatedAt: new Date(post.updatedAt),
        },
        create: {
          ...post,
          createdAt: new Date(post.createdAt),
          updatedAt: new Date(post.updatedAt),
        },
      }),
    );

    // Run all operations in one transaction
    const updatePosts = await db.$transaction(operations);

    return NextResponse.json({ items: updatePosts }, { status: 200, statusText: 'Posts Updated' });
  } catch (error) {
    console.error('---> route handler error (update posts):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
