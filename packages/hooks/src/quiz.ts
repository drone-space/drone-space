import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { useStoreSession } from '@repo/libraries/zustand/stores/session';
import { Status } from '@repo/types/models/enums';
import { getRegionalDate } from '@repo/utilities/date-time';

export const useQuizStats = (params: {
  quizId?: string;
  attemptId?: string;
}) => {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const attempts = useStoreAttempt((s) => s.attempts);
  const session = useStoreSession((s) => s.session);
  const questions = useStoreQuestion((s) => s.questions);
  const options = useStoreOption((s) => s.options);
  const answers = useStoreAnswer((s) => s.answers);

  const userAttempts = attempts?.filter((ai) => ai.profile_id === session?.id);
  const attempt = userAttempts?.find((ai) => ai.id === params.attemptId);

  const quiz = quizzes?.find((qi) => {
    if (params.quizId) return qi.id === params.quizId;
    return qi.id === attempt?.quiz_id;
  });

  const dateAttempted = !quiz?.created_at
    ? undefined
    : getRegionalDate(quiz.created_at);

  const quizQuestions = questions?.filter((qi) => qi.quiz_id === quiz?.id);
  const thresholdPass = quiz?.pass_threshold ?? 0;

  // --- HELPER TO COMPUTE SCORE FOR ANY ATTEMPT DYNAMICALLY ---
  const getAttemptScore = (currAttemptId: string): number => {
    const currentAttemptAnswers =
      answers?.filter((an) => an.attempt_id === currAttemptId) || [];
    if (currentAttemptAnswers.length === 0) return 0;

    const correctCount = currentAttemptAnswers.filter((aai) => {
      const answerOption = options?.find((oi) => oi.id === aai.option_id);
      return answerOption?.correct;
    }).length;

    // Assuming score is a percentage integer (e.g., 85 for 85%)
    // Adjust this formula if your previous score field was raw counts instead of percentage
    const totalQuestionsInQuiz = quizQuestions?.length || 1;
    return Math.round((correctCount / totalQuestionsInQuiz) * 100);
  };

  // --- SINGLE ATTEMPT STATS ---
  const attemptAnswers =
    answers?.filter((ai) => ai.attempt_id === params.attemptId) || [];
  const correctAnswers = attemptAnswers.filter((aai) => {
    const answerOption = options?.find((oi) => oi.id === aai.option_id);
    return answerOption?.correct;
  });

  const answersCorrect = correctAnswers.length;
  const answersTotal = attemptAnswers.length;
  const answersWrong = answersTotal - answersCorrect;

  // Compute live score for the focused attempt
  const quizScore = params.attemptId ? getAttemptScore(params.attemptId) : 0;

  const completeStats = {
    questions: {
      correct: answersCorrect,
      wrong: answersWrong,
      total: answersTotal,
    },
    score: quizScore,
    passed: quizScore >= thresholdPass, // Changed to >= to typically include threshold boundary
    dateAttempted,
  };

  // --- META/AGGREGATE STATS ---
  const quizAttempts =
    userAttempts?.filter(
      (ai) => ai.quiz_id === quiz?.id && ai.status === Status.COMPLETE
    ) || [];

  // Dynamically compute passes across all historical attempts for this quiz
  const quizPasses = quizAttempts.filter((ai) => {
    const historicalScore = getAttemptScore(ai.id);
    return historicalScore >= thresholdPass;
  });

  const attemptsQuiz = quizAttempts.length;
  const passesQuiz = quizPasses.length;
  const questionsTotal = quizQuestions?.length || 0;

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
    options,
    attemptAnswers,
  };
};
