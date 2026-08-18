"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/src/data/questions";

type AnswerRecord = {
  questionId: number;
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  explanation?: string;
  isCorrect: boolean;
};

const TOTAL_QUESTIONS = 30;

export default function SimuladoPage() {
  const router = useRouter();

  const simulationQuestions = useMemo(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, TOTAL_QUESTIONS);
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showReview, setShowReview] = useState(false);

  const currentQuestion = simulationQuestions[currentQuestionIndex];

  function handleNextQuestion() {
    if (!selectedAnswer || !currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;
    const updatedScore = isCorrect ? score + 1 : score;

    const answerRecord: AnswerRecord = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selectedAnswer,
      correctAnswer: currentQuestion.answer,
      explanation: currentQuestion.explanation,
      isCorrect,
    };

    setAnswers((currentAnswers) => [
      ...currentAnswers,
      answerRecord,
    ]);

    if (isCorrect) {
      setScore(updatedScore);
    }

    const isLastQuestion =
      currentQuestionIndex === simulationQuestions.length - 1;

    if (isLastQuestion) {
      setScore(updatedScore);
      setFinished(true);
      return;
    }

    setCurrentQuestionIndex((current) => current + 1);
    setSelectedAnswer(null);
  }

 function handleRestart() {
  setCurrentQuestionIndex(0);
  setSelectedAnswer(null);
  setScore(0);
  setFinished(false);
  setAnswers([]);
  setShowReview(false);
}

  if (simulationQuestions.length < TOTAL_QUESTIONS) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">⚠️</div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Ainda faltam perguntas
          </h1>

          <p className="mt-3 leading-7 text-slate-500">
            O simulado precisa de pelo menos 30 perguntas cadastradas.
            Atualmente existem {questions.length}.
          </p>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-6 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white"
          >
            Voltar ao início
          </button>
        </div>
      </main>
    );
  }

  if (finished) {
    const percentage = Math.round(
      (score / simulationQuestions.length) * 100
    );
    const wrongAnswers = answers.filter(
      (answer) => !answer.isCorrect
    );

    let message = "";
    let icon = "";

    if (percentage >= 80) {
      message = "Excelente resultado!";
      icon = "🏆";
    } else if (percentage >= 60) {
      message = "Bom resultado!";
      icon = "👏";
    } else {
      message = "Continue estudando!";
      icon = "📚";
    }

    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
        <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <div className="text-6xl">{icon}</div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Resultado do simulado
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            {message}
          </h1>

          <div className="my-8 rounded-3xl bg-slate-50 p-8">
            <div className="text-6xl font-bold text-slate-900">
              {score}
              <span className="text-2xl font-medium text-slate-400">
                /30
              </span>
            </div>

            <p className="mt-3 text-slate-500">
              Você acertou {score} de {simulationQuestions.length} questões.
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-slate-900"
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>

            <p className="mt-3 text-lg font-semibold text-slate-700">
              {percentage}% de aproveitamento
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Acertos</p>

              <p className="mt-1 text-2xl font-bold text-slate-900">
                {score}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-sm text-slate-500">Erros</p>

              <p className="mt-1 text-2xl font-bold text-slate-900">
                {simulationQuestions.length - score}
              </p>
            </div>
          </div>
          {wrongAnswers.length > 0 && (
  <div className="mt-8">
    <button
      type="button"
      onClick={() => setShowReview((current) => !current)}
      className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
    >
      {showReview
        ? "Ocultar revisão"
        : `Revisar ${wrongAnswers.length} questões erradas`}
    </button>

    {showReview && (
      <div className="mt-6 space-y-4 text-left">
        {wrongAnswers.map((answer, index) => (
          <div
            key={answer.questionId}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Erro {index + 1}
            </p>

            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              {answer.question}
            </h3>

            <div className="mt-5 grid gap-3">
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm font-medium text-red-600">
                  Sua resposta
                </p>

                <p className="mt-1 font-semibold text-red-800">
                  {answer.selectedAnswer}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-medium text-emerald-600">
                  Resposta correta
                </p>

                <p className="mt-1 font-semibold text-emerald-800">
                  {answer.correctAnswer}
                </p>
              </div>
            </div>

            {answer.explanation && (
              <div className="mt-4 rounded-xl bg-white p-4">
                <p className="text-sm font-semibold text-slate-700">
                  Explicação
                </p>

                <p className="mt-2 leading-6 text-slate-500">
                  {answer.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
)}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleRestart}
              className="flex-1 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Fazer novo simulado
            </button>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex-1 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-3xl">
        {/* Topo */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            ← Sair do simulado
          </button>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            📝 Simulado
          </span>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Cabeçalho da questão */}
          <div className="border-b border-slate-100 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Simulado completo
                </p>

                <h1 className="mt-1 text-xl font-bold text-slate-900">
                  Questão {currentQuestionIndex + 1} de{" "}
                  {simulationQuestions.length}
                </h1>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                {currentQuestionIndex + 1}
              </div>
            </div>

            {/* Barra de progresso */}
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-slate-900 transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) /
                      simulationQuestions.length) *
                    100
                    }%`,
                }}
              />
            </div>
          </div>

          {/* Pergunta */}
          <div className="p-6 sm:p-8">
            <p className="text-sm font-medium text-slate-400">
              {currentQuestion.category}
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-relaxed text-slate-900 sm:text-3xl">
              {currentQuestion.question}
            </h2>

            {/* Alternativas */}
            <div className="mt-8 grid gap-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;

                const letter = ["A", "B", "C", "D"][index];

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedAnswer(option)}
                    className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${isSelected
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${isSelected
                          ? "bg-white text-slate-900"
                          : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      {letter}
                    </span>

                    <span className="text-base font-medium sm:text-lg">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Botão */}
            <button
              type="button"
              disabled={!selectedAnswer}
              onClick={handleNextQuestion}
              className="mt-8 w-full rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentQuestionIndex === simulationQuestions.length - 1
                ? "Finalizar simulado"
                : "Próxima questão"}
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-slate-400">
          Escolha uma alternativa para continuar.
        </p>
      </div>
    </main>
  );
}