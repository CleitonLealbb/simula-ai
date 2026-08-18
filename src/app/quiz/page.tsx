"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { questions } from "@/src/data/questions";

function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("categoria");

 const quizQuestions = useMemo(() => {
  let filteredQuestions = questions;

  if (category && category !== "misto") {
    filteredQuestions = questions.filter(
      (question) => question.category === category
    );
  }

  // Embaralha as perguntas
  const shuffledQuestions = [...filteredQuestions].sort(
    () => Math.random() - 0.5
  );

  // Seleciona no máximo 30 perguntas
  return shuffledQuestions.slice(0, 30);
}, [category]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  function handleNextQuestion() {
    if (!selectedAnswer || !currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;

    const updatedScore = isCorrect ? score + 1 : score;

    if (isCorrect) {
      setScore(updatedScore);
    }

    if (currentQuestionIndex === quizQuestions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
    setSelectedAnswer(null);
  }

  function handleRestart() {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  if (quizQuestions.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">🤔</div>

          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Nenhuma pergunta encontrada
          </h1>

          <p className="mt-2 text-slate-500">
            Essa categoria ainda não possui perguntas.
          </p>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-6 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white"
          >
            Voltar para o início
          </button>
        </div>
      </main>
    );
  }

  if (finished) {
    const percentage = Math.round(
      (score / quizQuestions.length) * 100
    );

    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-sm">
          <div className="text-6xl">
            {percentage >= 70 ? "🎉" : "📚"}
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Quiz concluído!
          </h1>

          <p className="mt-2 text-slate-500">
            Veja como você se saiu.
          </p>

          <div className="my-8 rounded-2xl bg-slate-50 p-6">
            <div className="text-5xl font-bold text-slate-900">
              {percentage}%
            </div>

            <p className="mt-2 text-slate-500">
              Você acertou {score} de {quizQuestions.length} perguntas.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleRestart}
              className="flex-1 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white"
            >
              Tentar novamente
            </button>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex-1 rounded-xl border border-slate-200 px-5 py-3 font-medium text-slate-700"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="mb-6 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Voltar
        </button>

        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>
                Pergunta {currentQuestionIndex + 1}
              </span>

              <span>
                {currentQuestionIndex + 1} de {quizQuestions.length}
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-slate-900 transition-all"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) /
                      quizQuestions.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold leading-relaxed text-slate-900 sm:text-3xl">
            {currentQuestion.question}
          </h1>

          <div className="mt-8 grid gap-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedAnswer(option)}
                  className={`rounded-2xl border p-4 text-left text-lg font-medium transition ${
                    isSelected
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={!selectedAnswer}
            onClick={handleNextQuestion}
            className="mt-8 w-full rounded-xl bg-slate-900 px-5 py-4 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            {currentQuestionIndex === quizQuestions.length - 1
              ? "Finalizar"
              : "Próxima pergunta"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-50">
          <p className="text-slate-500">Carregando quiz...</p>
        </main>
      }
    >
      <QuizContent />
    </Suspense>
  );
}