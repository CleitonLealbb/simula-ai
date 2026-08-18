"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Sigma,
  Radical,
  ChartNoAxesCombined,
  Superscript,
  Ratio,
  TrendingUp,
  Shapes,
  Triangle,
  Dices,
  ChartColumn,
  Landmark,
} from "lucide-react";

const highSchoolCategories = [
  {
    name: "Equação do 1º grau",
    value: "equacao-primeiro-grau",
    icon: Sigma,
    description: "Resolva equações com uma incógnita.",
  },
  {
    name: "Equação do 2º grau",
    value: "equacao-segundo-grau",
    icon: Radical,
    description: "Pratique Bhaskara, raízes e discriminante.",
  },
  {
    name: "Funções",
    value: "funcoes",
    icon: ChartNoAxesCombined,
    description: "Estude funções, gráficos e relações.",
  },
  {
    name: "Potenciação",
    value: "potenciacao",
    icon: Superscript,
    description: "Pratique potências e suas propriedades.",
  },
  {
    name: "Radiciação",
    value: "radiciacao",
    icon: Radical,
    description: "Resolva operações envolvendo raízes.",
  },
  {
    name: "Razão e proporção",
    value: "razao-proporcao",
    icon: Ratio,
    description: "Treine proporções e regra de três.",
  },
  {
    name: "PA e PG",
    value: "pa-pg",
    icon: TrendingUp,
    description: "Estude progressões aritméticas e geométricas.",
  },
  {
    name: "Geometria",
    value: "geometria",
    icon: Shapes,
    description: "Áreas, perímetros, volumes e figuras.",
  },
  {
    name: "Trigonometria",
    value: "trigonometria",
    icon: Triangle,
    description: "Seno, cosseno, tangente e triângulos.",
  },
  {
    name: "Probabilidade",
    value: "probabilidade",
    icon: Dices,
    description: "Resolva problemas envolvendo possibilidades.",
  },
  {
    name: "Estatística",
    value: "estatistica",
    icon: ChartColumn,
    description: "Média, mediana, moda e interpretação de dados.",
  },
  {
    name: "Matemática financeira",
    value: "matematica-financeira",
    icon: Landmark,
    description: "Juros, descontos e aplicações financeiras.",
  },
];

export default function EnsinoMedioPage() {
  const router = useRouter();

  function handleCategory(category: string) {
    router.push(`/aprender/${category}`);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>

          <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600">
            Ensino Médio
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Hero */}
        <section className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            Matemática
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Conteúdos do Ensino Médio
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
            Escolha um conteúdo para estudar e pratique questões específicas
            antes de fazer o simulado.
          </p>
        </section>

        {/* Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highSchoolCategories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategory(category.value)}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                    <Icon
                      size={24}
                      strokeWidth={2}
                      className="text-violet-600"
                    />
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-600"
                  />
                </div>

                <h2 className="mt-5 text-lg font-semibold text-slate-900">
                  {category.name}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>
              </button>
            );
          })}
        </section>

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