"use client";

import { useRouter } from "next/navigation";
import {
  Plus,
  Minus,
  X,
  Divide,
  Percent,
  WalletCards,
  ArrowRight,
  ClipboardCheck,
  GraduationCap
} from "lucide-react";

const categories = [
  {
    name: "Adição",
    value: "adicao",
    icon: Plus,
    description: "Pratique operações de soma.",
  },
  {
    name: "Subtração",
    value: "subtracao",
    icon: Minus,
    description: "Treine operações de subtração.",
  },
  {
    name: "Multiplicação",
    value: "multiplicacao",
    icon: X,
    description: "Aprimore sua tabuada.",
  },
  {
    name: "Divisão",
    value: "divisao",
    icon: Divide,
    description: "Pratique operações de divisão.",
  },
  {
    name: "Porcentagem",
    value: "porcentagem",
    icon: Percent,
    description: "Treine porcentagens e descontos.",
  },
  {
    name: "Matemática do dia a dia",
    value: "cotidiano",
    icon: WalletCards,
    description: "Resolva situações práticas do cotidiano.",
  },
];

export default function Home() {
  const router = useRouter();

  function handleCategory(category: string) {
    router.push(`/aprender/${category}`);
  }

  function handleSimulado() {
    router.push("/simulado");
  }

  function handleHighSchool() {
    router.push("/ensino-medio");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Matemática
            </h1>

            <p className="text-sm text-slate-500">
              Plataforma de estudos
            </p>
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
            📚 Estudos
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Hero */}
        <section className="mb-12 overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
              Preparação para provas
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
              Aprenda matemática no seu ritmo.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Escolha um conteúdo para estudar ou faça um simulado completo
              para testar seus conhecimentos.
            </p>

            <button
              type="button"
              onClick={handleSimulado}
              className="mt-7 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Fazer simulado
            </button>
          </div>
        </section>

        {/* Conteúdos */}
        <section>
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Estudar
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Escolha um conteúdo
            </h2>

            <p className="mt-2 text-slate-500">
              Pratique um assunto específico antes de fazer o simulado.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => handleCategory(category.value)}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                      <Icon
                        size={24}
                        strokeWidth={2}
                        className="text-violet-600"
                      />
                    </div>

                    <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700">
                      <ArrowRight
                        size={18}
                        className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-slate-700"
                      />
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Simulado */}
        <section className="mt-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-2xl text-white">
                  <ClipboardCheck size={28} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Preparação para prova
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Simulado completo
                  </h2>

                  <p className="mt-2 max-w-xl text-slate-500">
                    Faça uma prova com 30 questões de diferentes conteúdos
                    e veja seu resultado ao final.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                      30 questões
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                      Conteúdos variados
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                      Resultado final
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSimulado}
                className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Iniciar simulado
              </button>
            </div>
          </div>
        </section>

        {/* Próximos conteúdos */}
        <section className="mt-12">
  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
          <GraduationCap size={28} strokeWidth={2} />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            Nível avançado
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Matemática do Ensino Médio
          </h2>

          <p className="mt-2 max-w-2xl leading-7 text-slate-500">
            Estude equações, funções, geometria, trigonometria,
            probabilidade, estatística e outros conteúdos.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Equações", "Funções", "Geometria", "+ outros"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleHighSchool}
        className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
      >
        Ver conteúdos
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
</section>

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Todos os direitos reservados{" "}
          <a
            href="https://meuportifolio-orcin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-600 underline transition hover:text-slate-900"
          >
            Cleiton Leal De Brito Batista
          </a>
        </footer>
      </div>
    </main>
  );
}