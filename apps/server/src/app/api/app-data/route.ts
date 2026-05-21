/**
 * @template-source next-template
 * @template-sync auto
 * @description This file originates from the base template repository.
 * Do not modify unless you intend to backport changes to the template.
 */

import prisma from '@repo/libraries/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { SyncStatus } from '@repo/types/models/enums';
import { STORE_NAME } from '@repo/constants/names';

export const dynamic = 'force-dynamic';
// export const revalidate = 3600;

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');
    const stores = request.nextUrl.searchParams.get('stores');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // 1. Parse the requested stores into an array
    const requestedStores = stores ? stores.split(',') : [];

    // 2. Define the Query Map
    // This maps the URL string to the actual Prisma call
    const queryMap: Record<string, () => any> = {
      [STORE_NAME.CATEGORIES]: () =>
        prisma.category.findMany({
          // where: { profile_id: userId },
          orderBy: { created_at: 'desc' },
        }),
      [STORE_NAME.POSTS]: () =>
        prisma.post.findMany({
          // where: { profile_id: userId },
          orderBy: { created_at: 'desc' },
        }),
      [STORE_NAME.QUIZZES]: () =>
        prisma.quiz.findMany({
          // where: { profile_id: userId },
          orderBy: { created_at: 'desc' },
        }),
      [STORE_NAME.QUESTIONS]: () =>
        prisma.question.findMany({
          // where: { profile_id: userId },
          orderBy: { created_at: 'desc' },
        }),
      [STORE_NAME.QUIZ_QUESTIONS]: () =>
        prisma.quizQuestion.findMany({
          // where: { profile_id: userId },
          orderBy: { created_at: 'desc' },
        }),
      [STORE_NAME.OPTIONS]: () =>
        prisma.option.findMany({
          // where: { profile_id: userId },
          orderBy: { created_at: 'desc' },
        }),
      [STORE_NAME.ATTEMPTS]: () =>
        prisma.attempt.findMany({
          // where: { profile_id: userId },
          orderBy: { created_at: 'desc' },
        }),
      [STORE_NAME.ANSWERS]: () =>
        prisma.answer.findMany({
          // where: { profile_id: userId },
          orderBy: { created_at: 'desc' },
        }),
    };

    // 3. Filter the map to only include requested stores
    const activeQueries = requestedStores
      .filter((key) => !!queryMap[key]) // Ignore invalid keys
      .map((key) => queryMap[key]());

    // 3. Execute the transaction
    const results = await prisma.$transaction(activeQueries);

    // 5. Format into a clean object: { tasks: [...], categories: [...] }
    // Map the results back to their keys
    const responsePayload = requestedStores.reduce(
      (acc, key, index) => {
        acc[key] = results[index];
        return acc;
      },
      {} as Record<string, any>
    );

    return NextResponse.json(responsePayload, {
      status: 200,
      statusText: 'App Data Fetched',
    });
  } catch (error) {
    console.error('---> route handler error (get app data):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

const PRISMA_MODEL_MAP: Record<string, any> = {
  [STORE_NAME.CATEGORIES]: prisma.category,
  [STORE_NAME.POSTS]: prisma.post,
  [STORE_NAME.QUIZZES]: prisma.quiz,
  [STORE_NAME.QUESTIONS]: prisma.question,
  [STORE_NAME.QUIZ_QUESTIONS]: prisma.quizQuestion,
  [STORE_NAME.OPTIONS]: prisma.option,
  [STORE_NAME.ATTEMPTS]: prisma.attempt,
  [STORE_NAME.ANSWERS]: prisma.answer,
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
              sync_status: SyncStatus.DELETED, // Ensure this matches your SyncStatus enum string
              updated_at: new Date(), // Critical: must be "now" to override other devices
            },
          })
        );
      }

      // Handle Upserts
      const upserts = (itemsToUpsert || []).map((item: any) =>
        model.upsert({
          where: { id: item.id },
          update: {
            ...item,
            updated_at: new Date(item.updated_at),
          },
          create: {
            ...item,
            created_at: new Date(item.created_at),
            updated_at: new Date(item.updated_at),
          },
        })
      );

      allOperations.push(...upserts);
      storeRanges[key] = { start: startIdx, end: allOperations.length };
    });

    // Execute everything in ONE transaction
    const flatResults = await prisma.$transaction(allOperations);

    // Map the flat results back to the store keys
    const responsePayload = requestedStores.reduce(
      (acc, key) => {
        const range = storeRanges[key];
        if (range) {
          const rawResults = flatResults.slice(range.start, range.end);
          // Filter out the 'updateMany' result (which is usually { count: x })
          // and keep the upsert results
          acc[key] = rawResults.filter(
            (res) =>
              res && typeof res === 'object' && !res.hasOwnProperty('count')
          );
        }
        return acc;
      },
      {} as Record<string, any>
    );

    return NextResponse.json(
      { items: responsePayload },
      {
        status: 200,
        statusText: 'App Data Updated',
      }
    );
  } catch (error) {
    console.error('---> route handler error (update app data):', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
