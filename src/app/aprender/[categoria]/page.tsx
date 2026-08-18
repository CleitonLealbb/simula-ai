"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  CircleAlert,
  GraduationCap,
  Lightbulb,
  Sigma
} from "lucide-react";

import {
  lessons,
  type LessonConcept,
  type LessonExample,
} from "@/src/data/lessons";

export default function LearnPage() {
  const router = useRouter();
  const params = useParams<{ categoria: string }>();

  const category = params.categoria;
  const lesson = lessons[category];
  const [openExample, setOpenExample] = useState<number>(0);

  if (!lesson) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <BookOpen size={42} className="mx-auto text-slate-400" />

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Aula não encontrada
          </h1>

          <p className="mt-2 text-slate-500">
            Ainda não existe uma aula explicativa para este conteúdo.
          </p>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-6 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Voltar ao início
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${lesson.schoolLevel === "medio"
              ? "bg-violet-50 text-violet-600"
              : "bg-slate-100 text-slate-600"
              }`}
          >
            {lesson.schoolLevel === "medio"
              ? "Ensino Médio"
              : "Ensino Fundamental"}
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Hero */}
        <section className="rounded-3xl bg-slate-900 p-7 text-white sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              {lesson.schoolLevel === "medio" ? (
                <GraduationCap size={28} />
              ) : (
                <BookOpen size={28} />
              )}
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Aula explicativa
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {lesson.title}
              </h1>

              <p className="mt-2 text-lg text-slate-300">
                {lesson.subtitle}
              </p>

              <p className="mt-5 max-w-3xl leading-7 text-slate-300">
                {lesson.introduction}
              </p>
            </div>
          </div>
        </section>

        {/* Conceitos */}
        <section className="mt-8">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Fundamentos
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              O que você precisa saber
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {lesson.concepts.map((concept: LessonConcept, index: number) => (
              <article
                key={`${concept.title}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <BookOpen size={20} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {concept.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-500">
                  {concept.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Fórmula */}
        {lesson.formula && (
          <section className="mt-8 rounded-3xl border border-violet-100 bg-violet-50 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white">
                <Sigma size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
                  Fórmula
                </p>

                <h2 className="text-xl font-bold text-slate-900">
                  {lesson.formula.title}
                </h2>
              </div>
            </div>

            <div className="mt-5 whitespace-pre-line rounded-2xl bg-white p-5 font-mono text-base leading-8 text-slate-800 shadow-sm sm:text-lg">
              {lesson.formula.content}
            </div>
          </section>
        )}

       {/* Exemplos */}
<section className="mt-10">
  <div className="mb-5">
    <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
      Passo a passo
    </p>

    <h2 className="mt-1 text-2xl font-bold text-slate-900">
      Exemplos resolvidos
    </h2>

    <p className="mt-2 text-slate-500">
      Abra cada exemplo para acompanhar a resolução passo a passo.
    </p>
  </div>

  <div className="space-y-4">
    {lesson.examples.map(
      (example: LessonExample, exampleIndex: number) => {
        const isOpen = openExample === exampleIndex;

        return (
          <article
            key={`${example.title}-${exampleIndex}`}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            {/* Cabeçalho do accordion */}
            <button
              type="button"
              onClick={() =>
                setOpenExample(isOpen ? -1 : exampleIndex)
              }
              className="group flex w-full items-center justify-between gap-4 p-6 text-left transition hover:bg-slate-50 sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                    isOpen
                      ? "bg-violet-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Calculator size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
                    Exemplo {exampleIndex + 1}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                    {example.title}
                  </h3>
                </div>
              </div>

              <ChevronDown
                size={22}
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-violet-600" : ""
                }`}
              />
            </button>

            {/* Conteúdo */}
            {isOpen && (
              <div className="border-t border-slate-100">
                {/* Problema */}
                <div className="p-6 pb-0 sm:p-7 sm:pb-0">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-medium text-slate-500">
                      Problema
                    </p>

                    <p className="mt-2 text-xl font-semibold leading-8 text-slate-900">
                      {example.question}
                    </p>
                  </div>
                </div>

                {/* Passos */}
                <div className="p-6 sm:p-7">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Resolução
                  </p>

                  <div className="space-y-3">
                    {example.steps.map(
                      (step: string, stepIndex: number) => (
                        <div
                          key={`${exampleIndex}-${stepIndex}`}
                          className="flex gap-4 rounded-2xl bg-slate-50 p-5"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                            {stepIndex + 1}
                          </div>

                          <p className="pt-1 leading-7 text-slate-700">
                            {step}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* Resposta */}
                  <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <div className="flex items-center gap-2">
                      <Check
                        size={20}
                        className="text-emerald-600"
                      />

                      <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                        Resposta
                      </p>
                    </div>

                    <p className="mt-3 text-xl font-bold text-emerald-900">
                      {example.answer}
                    </p>
                  </div>

                  {/* Próximo exemplo */}
                  {exampleIndex < lesson.examples.length - 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenExample(exampleIndex + 1)
                      }
                      className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
                    >
                      Ver próximo exemplo
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </article>
        );
      }
    )}
  </div>
</section>

        {/* Erros e dicas */}
        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* Erros comuns */}
          <div className="rounded-3xl border border-red-100 bg-red-50 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <CircleAlert size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-red-500">
                  Atenção
                </p>

                <h2 className="text-xl font-bold text-slate-900">
                  Erros comuns
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {lesson.concepts.map(
                (concept: LessonConcept, index: number) => (
                  <article
                    key={`${concept.title}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <BookOpen size={20} />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {concept.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-500">
                      {concept.text}
                    </p>
                  </article>
                )
              )}
            </div>
          </div>

          {/* Dicas */}
          <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Lightbulb size={22} />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-violet-600">
                  Estratégia
                </p>

                <h2 className="text-xl font-bold text-slate-900">
                  Dicas para a prova
                </h2>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {lesson.examTips.map((tip: string, index: number) => (
                <div
                  key={`${tip}-${index}`}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-violet-600"
                  />

                  <p className="leading-6 text-slate-700">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 rounded-3xl bg-slate-900 p-7 text-white sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Próximo passo
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Agora é hora de praticar
              </h2>

              <p className="mt-2 max-w-xl text-slate-300">
                Responda às questões deste conteúdo e veja quantas você
                consegue acertar.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                router.push(`/quiz?categoria=${category}`)
              }
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Praticar agora
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          Estude a explicação, veja os exemplos e depois pratique.
        </footer>
      </div>
    </main>
  );
}