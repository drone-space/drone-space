import { postsGet } from '@/services/database/posts';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  try {
    const postRecords = await postsGet();

    if (postRecords == null) throw new Error('No Records Found');

    return NextResponse.json(
      { posts: postRecords },
      { status: 200, statusText: 'Posts Retrieved' }
    );
  } catch (error) {
    console.error('---> route handler error (get posts):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
