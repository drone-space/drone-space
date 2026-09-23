import { db } from '@repo/db';
import { NextRequest, NextResponse } from 'next/server';
import { SyncStatus } from '@repo/types';
import { STORE_NAME } from '@repo/constants';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');
    const stores = request.nextUrl.searchParams.get('stores');

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // 1. Parse the requested stores into an array
    const requestedStores = stores ? stores.split(',') : [];

    // 2. Define the Query Map
    // This maps the URL string to the actual Prisma call
    const queryMap: Record<string, () => any> = {
      [STORE_NAME.CATEGORIES]: () =>
        db.category.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.POSTS]: () =>
        db.post.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.QUIZZES]: () =>
        db.quiz.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.QUESTIONS]: () =>
        db.question.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.QUIZ_QUESTIONS]: () =>
        db.quizQuestion.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.OPTIONS]: () =>
        db.option.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.ATTEMPTS]: () =>
        db.attempt.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.ANSWERS]: () =>
        db.answer.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.SRPLS]: () =>
        db.srpl.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.ALUMNI_CHALLENGERS]: () =>
        db.alumniChallenger.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
      [STORE_NAME.STUDENTS]: () =>
        db.student.findMany({
          // where: { profileId: userId },
          orderBy: { createdAt: 'desc' },
        }),
    };

    // 3. Filter the map to only include requested stores
    const activeQueries = requestedStores
      .filter((key) => !!queryMap[key]) // Ignore invalid keys
      .map((key) => queryMap[key]());

    // 3. Execute the transaction
    const results = await db.$transaction(activeQueries);

    // 5. Format into a clean object: { tasks: [...], categories: [...] }
    // Map the results back to their keys
    const responsePayload = requestedStores.reduce(
      (acc, key, index) => {
        acc[key] = results[index];
        return acc;
      },
      {} as Record<string, any>,
    );

    return NextResponse.json(responsePayload, {
      status: 200,
      statusText: 'App Data Fetched',
    });
  } catch (error) {
    console.error('---> route handler error (get app data):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

const PRISMA_MODEL_MAP: Record<string, any> = {
  [STORE_NAME.CATEGORIES]: db.category,
  [STORE_NAME.POSTS]: db.post,
  [STORE_NAME.QUIZZES]: db.quiz,
  [STORE_NAME.QUESTIONS]: db.question,
  [STORE_NAME.QUIZ_QUESTIONS]: db.quizQuestion,
  [STORE_NAME.OPTIONS]: db.option,
  [STORE_NAME.ATTEMPTS]: db.attempt,
  [STORE_NAME.ANSWERS]: db.answer,
  [STORE_NAME.SRPLS]: db.srpl,
  [STORE_NAME.ALUMNI_CHALLENGERS]: db.alumniChallenger,
  [STORE_NAME.STUDENTS]: db.student,
};

const SYNC_PRIORITY: Record<string, number> = {
  [STORE_NAME.CATEGORIES]: 1,
  [STORE_NAME.POSTS]: 2,
  [STORE_NAME.QUIZZES]: 3,
  [STORE_NAME.QUESTIONS]: 4,
  [STORE_NAME.QUIZ_QUESTIONS]: 5,
  [STORE_NAME.OPTIONS]: 6,
  [STORE_NAME.ATTEMPTS]: 7,
  [STORE_NAME.ANSWERS]: 8,
  [STORE_NAME.SRPLS]: 9,
  [STORE_NAME.ALUMNI_CHALLENGERS]: 9,
  [STORE_NAME.STUDENTS]: 10,
};

export async function POST(request: NextRequest) {
  try {
    const storesParam = request.nextUrl.searchParams.get('stores');
    // Parse the requested stores into an array
    const rawStores = storesParam ? storesParam.split(',') : [];

    // SORT HERE: Ensure the API dictates the execution order
    const requestedStores = rawStores.sort((a, b) => {
      return (SYNC_PRIORITY[a] || 99) - (SYNC_PRIORITY[b] || 99);
    });

    // Parse the body ONCE
    const fullPayload = await request.json();

    const allOperations: any[] = [];
    const storeRanges: Record<string, { start: number; end: number }> = {};

    // Build a single flat array of Prisma promises
    requestedStores.forEach((key) => {
      const model = PRISMA_MODEL_MAP[key]; // Get the correct model accessor
      const data = fullPayload[key];
      const { upserts: itemsToUpsert = [], deletedIds = [] } = data;

      if (!data || !model) {
        console.error(`No model found for key: ${key}`);
        return;
      }

      const startIdx = allOperations.length;

      // Handle Soft Deletions
      if (deletedIds?.length) {
        allOperations.push(
          model.updateMany({
            where: { id: { in: deletedIds } },
            data: {
              syncStatus: SyncStatus.DELETED, // Ensure this matches your SyncStatus enum string
              updatedAt: new Date(), // Critical: must be "now" to override other devices
            },
          }),
        );
      }

      // Handle Upserts
      const upserts = (itemsToUpsert || []).map((item: any) =>
        model.upsert({
          where: { id: item.id },
          update: {
            ...item,
            updatedAt: new Date(item.updatedAt),
          },
          create: {
            ...item,
            createdAt: new Date(item.createdAt),
            updatedAt: new Date(item.updatedAt),
          },
        }),
      );

      allOperations.push(...upserts);
      storeRanges[key] = { start: startIdx, end: allOperations.length };
    });

    // Execute everything in ONE transaction
    const flatResults = await db.$transaction(allOperations);

    // Map the flat results back to the store keys
    const responsePayload = requestedStores.reduce(
      (acc, key) => {
        const range = storeRanges[key];
        if (range) {
          const rawResults = flatResults.slice(range.start, range.end);
          // Filter out the 'updateMany' result (which is usually { count: x })
          // and keep the upsert results
          acc[key] = rawResults.filter(
            (res) => res && typeof res === 'object' && !res.hasOwnProperty('count'),
          );
        }
        return acc;
      },
      {} as Record<string, any>,
    );

    return NextResponse.json(
      { items: responsePayload },
      {
        status: 200,
        statusText: 'App Data Updated',
      },
    );
  } catch (error) {
    console.error('---> route handler error (update app data):', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
