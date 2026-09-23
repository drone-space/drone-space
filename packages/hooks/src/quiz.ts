'use client';

import { useStoreAnswer } from '@repo/store';
import { useStoreAttempt } from '@repo/store';
import { useStoreOption } from '@repo/store';
import { useStoreQuestion } from '@repo/store';
import { useStoreQuizQuestion } from '@repo/store';
import { useStoreQuiz } from '@repo/store';
import { useStoreSession } from '@repo/store';
import { Status } from '@repo/types';
import { getRegionalDate } from '@repo/utils';
import { QuestionGet } from '@repo/types';

export const useQuizStats = (params: { quizId?: string; attemptId?: string }) => {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const attempts = useStoreAttempt((s) => s.attempts);
  const session = useStoreSession((s) => s.session);
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);
  const options = useStoreOption((s) => s.options);
  const answers = useStoreAnswer((s) => s.answers);

  // --- 1. FILTER BASICS & LOOKUP BRIDGES ---
  const userAttempts = attempts?.filter((ai) => ai.profileId === session?.id);
  const attempt = userAttempts?.find((ai) => ai.id === params.attemptId);

  const quiz = quizzes?.find((qi) => {
    if (params.quizId) return qi.id === params.quizId;
    return qi.id === attempt?.quizId;
  });

  const dateAttempted = !attempt?.createdAt ? undefined : getRegionalDate(attempt.createdAt);

  const quizQuestionsQuiz = quizQuestions?.filter((qqi) => qqi.quizId === quiz?.id);

  // 🔥 PERFORMANCE FIX: Build Map indexes once for instant constant-time lookups
  const questionMap = new Map(questions?.map((q) => [q.id, q]) || []);
  const optionsMap = new Map(options?.map((o) => [o.id, o]) || []);

  // Map out the true, unique Question rows for this quiz cleanly
  const quizQuestionsQuizQuestions =
    quizQuestionsQuiz
      ?.map((qqqi) => questionMap.get(qqqi.questionId))
      .filter((q): q is QuestionGet => !!q) || [];

  const thresholdPass = quiz?.passThreshold ?? 0;
  const totalQuestionsInQuiz = quizQuestionsQuiz?.length || 1;

  // --- 2. OPTIMIZED SCORE COMPUTER ---
  // Uses index lookup maps to completely eliminate array scanning loops
  const getAttemptScore = (currAttemptId: string): number => {
    const currentAttemptAnswers = answers?.filter((an) => an.attemptId === currAttemptId) || [];
    if (currentAttemptAnswers.length === 0) return 0;

    const correctCount = currentAttemptAnswers.filter((aai) => {
      // Instant O(1) retrieval instead of tracking down an array row via .find()
      const answerOption = optionsMap.get(aai.optionId);
      return answerOption?.correct;
    }).length;

    return Math.round((correctCount / totalQuestionsInQuiz) * 100);
  };

  // --- 3. SINGLE ATTEMPT STATS ---
  const attemptAnswers = answers?.filter((ai) => ai.attemptId === params.attemptId) || [];

  const correctAnswers = attemptAnswers.filter((aai) => {
    const answerOption = optionsMap.get(aai.optionId);
    return answerOption?.correct;
  });

  const answersCorrect = correctAnswers.length;
  const answersTotal = attemptAnswers.length;
  const answersWrong = answersTotal - answersCorrect;

  const quizScore = params.attemptId ? getAttemptScore(params.attemptId) : 0;

  const completeStats = {
    questions: {
      correct: answersCorrect,
      wrong: answersWrong,
      total: answersTotal,
    },
    score: quizScore,
    passed: quizScore >= thresholdPass,
    dateAttempted,
  };

  // --- 4. META / AGGREGATE STATS ---
  const quizAttempts =
    userAttempts?.filter((ai) => ai.quizId === quiz?.id && ai.status === Status.COMPLETE) || [];

  const quizPasses = quizAttempts.filter((ai) => {
    const historicalScore = getAttemptScore(ai.id);
    return historicalScore >= thresholdPass;
  });

  const attemptsQuiz = quizAttempts.length;
  const passesQuiz = quizPasses.length;
  const questionsTotal = quizQuestionsQuiz?.length || 0;

  const metaStats = {
    timesAttempted: attemptsQuiz,
    timesPassed: passesQuiz,
    timesFailed: attemptsQuiz - passesQuiz,
    successRate: attemptsQuiz > 0 ? Math.floor((passesQuiz / attemptsQuiz) * 100) : 0,
    totalQuestions: questionsTotal,
  };

  return {
    metaStats,
    completeStats,

    // other
    quizzes,
    quiz,
    quizQuestions,
    quizQuestionsQuizQuestions,
    options,
    attemptAnswers,
  };
};
