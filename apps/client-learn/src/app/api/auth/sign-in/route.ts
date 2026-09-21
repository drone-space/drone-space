import { NextResponse } from 'next/server';
import { signIn } from '@repo/services/api/auth';
import { SignIn } from '@repo/types/auth';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function POST(request: Request) {
  try {
    const body: SignIn = await request.json();
    const signInResult = await signIn(body);

    return NextResponse.json(
      { data: signInResult },
      { status: 200, statusText: 'Sign In Request Accepted' },
    );
  } catch (error) {
    console.error('---> route handler error (sign in):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
