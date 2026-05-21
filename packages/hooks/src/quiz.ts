import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useStoreQuizQuestion } from '@repo/libraries/zustand/stores/quiz-question';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { Status } from '@repo/types/models/enums';
import { getRegionalDate } from '@repo/utilities/date-time';
import { QuestionGet } from '@repo/types/models/question';

export const useQuizStats = (params: {
  quizId?: string;
  attemptId?: string;
}) => {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const attempts = useStoreAttempt((s) => s.attempts);
  const session = useStoreSession((s) => s.session);
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = useStoreQuizQuestion((s) => s.quizQuestions);
  const options = useStoreOption((s) => s.options);
  const answers = useStoreAnswer((s) => s.answers);

  // --- 1. FILTER BASICS & LOOKUP BRIDGES ---
  const userAttempts = attempts?.filter((ai) => ai.profile_id === session?.id);
  const attempt = userAttempts?.find((ai) => ai.id === params.attemptId);

  const quiz = quizzes?.find((qi) => {
    if (params.quizId) return qi.id === params.quizId;
    return qi.id === attempt?.quiz_id;
  });

  const dateAttempted = !attempt?.created_at
    ? undefined
    : getRegionalDate(attempt.created_at);

  const quizQuestionsQuiz = quizQuestions?.filter(
    (qqi) => qqi.quiz_id === quiz?.id
  );

  // 🔥 PERFORMANCE FIX: Build Map indexes once for instant constant-time lookups
  const questionMap = new Map(questions?.map((q) => [q.id, q]) || []);
  const optionsMap = new Map(options?.map((o) => [o.id, o]) || []);

  // Map out the true, unique Question rows for this quiz cleanly
  const quizQuestionsQuizQuestions =
    quizQuestionsQuiz
      ?.map((qqqi) => questionMap.get(qqqi.question_id))
      .filter((q): q is QuestionGet => !!q) || [];

  const thresholdPass = quiz?.pass_threshold ?? 0;
  const totalQuestionsInQuiz = quizQuestionsQuiz?.length || 1;

  // --- 2. OPTIMIZED SCORE COMPUTER ---
  // Uses index lookup maps to completely eliminate array scanning loops
  const getAttemptScore = (currAttemptId: string): number => {
    const currentAttemptAnswers =
      answers?.filter((an) => an.attempt_id === currAttemptId) || [];
    if (currentAttemptAnswers.length === 0) return 0;

    const correctCount = currentAttemptAnswers.filter((aai) => {
      // Instant O(1) retrieval instead of tracking down an array row via .find()
      const answerOption = optionsMap.get(aai.option_id);
      return answerOption?.correct;
    }).length;

    return Math.round((correctCount / totalQuestionsInQuiz) * 100);
  };

  // --- 3. SINGLE ATTEMPT STATS ---
  const attemptAnswers =
    answers?.filter((ai) => ai.attempt_id === params.attemptId) || [];

  const correctAnswers = attemptAnswers.filter((aai) => {
    const answerOption = optionsMap.get(aai.option_id);
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
    userAttempts?.filter(
      (ai) => ai.quiz_id === quiz?.id && ai.status === Status.COMPLETE
    ) || [];

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
    successRate:
      attemptsQuiz > 0 ? Math.floor((passesQuiz / attemptsQuiz) * 100) : 0,
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
