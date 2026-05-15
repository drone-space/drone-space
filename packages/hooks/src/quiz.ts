import { useStoreAnswer } from '@repo/libraries/zustand/stores/answer';
import { useStoreAttempt } from '@repo/libraries/zustand/stores/attempt';
import { useStoreOption } from '@repo/libraries/zustand/stores/option';
import { useStoreQuestion } from '@repo/libraries/zustand/stores/question';
import { useStoreQuiz } from '@repo/libraries/zustand/stores/quiz';
import { Status } from '@repo/types/models/enums';
import { getRegionalDate } from '@repo/utilities/date-time';

export const useQuizStats = (params: {
  quizId?: string;
  attemptId?: string;
}) => {
  const quizzes = useStoreQuiz((s) => s.quizzes);
  const attempts = useStoreAttempt((s) => s.attempts);
  const attempt = attempts?.find((ai) => ai.id == params.attemptId);
  const quiz = quizzes?.find((qi) => {
    if (params.quizId) return qi.id == params.quizId;
    return qi.id == attempt?.quiz_id;
  });
  const dateAttempted = !quiz?.created_at
    ? undefined
    : getRegionalDate(quiz.created_at);
  const questions = useStoreQuestion((s) => s.questions);
  const quizQuestions = questions?.filter((qi) => qi.quiz_id == quiz?.id);
  const quizAttempts = attempts?.filter(
    (ai) => ai.quiz_id == quiz?.id && ai.status == Status.COMPLETE
  );
  const quizPasses = attempts?.filter(
    (ai) =>
      ai.quiz_id == quiz?.id &&
      ai.status == Status.COMPLETE &&
      ai.score &&
      ai.score > (quiz?.pass_threshold || 0)
  );
  const options = useStoreOption((s) => s.options);
  const answers = useStoreAnswer((s) => s.answers);
  const attemptAnswers = answers?.filter(
    (ai) => ai.attempt_id == params.attemptId
  );
  const correctAnswers = attemptAnswers?.filter((aai) => {
    const answerOption = options?.find((oi) => oi.id == aai.option_id);
    return answerOption?.correct;
  });

  const answersCorrect = correctAnswers?.length || 0;
  const answersWrong = (attemptAnswers?.length || 0) - answersCorrect;
  const answersTotal = attemptAnswers?.length || 0;

  const quizScore = attempt?.score || 0;
  const thresholdPass = quiz?.pass_threshold || 0;

  const completeStats = {
    questions: {
      correct: answersCorrect,
      wrong: answersWrong,
      total: answersTotal,
    },
    score: quizScore,
    passed: quizScore > thresholdPass,
    dateAttempted,
  };

  const attemptsQuiz = quizAttempts?.length || 0;
  const passesQuiz = quizPasses?.length || 0;
  const questionsTotal = quizQuestions?.length || 0;

  const metaStats = {
    timesAttempted: attemptsQuiz,
    timesPassed: passesQuiz,
    timesFailed: attemptsQuiz - passesQuiz,
    successRate: Math.floor((passesQuiz / attemptsQuiz) * 100),
    totalQuesions: questionsTotal,
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
