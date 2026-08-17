"use client";

import { useRouter } from "next/navigation";

const categories = [
  {
    name: "Adição",
    value: "adicao",
    symbol: "➕",
    description: "Treine contas de somar",
  },
  {
    name: "Subtração",
    value: "subtracao",
    symbol: "➖",
    description: "Pratique contas de diminuir",
  },
  {
    name: "Multiplicação",
    value: "multiplicacao",
    symbol: "✖️",
    description: "Treine a tabuada",
  },
  {
    name: "Divisão",
    value: "divisao",
    symbol: "➗",
    description: "Pratique contas de dividir",
  },
  {
    name: "Quiz Misto",
    value: "misto",
    symbol: "🧠",
    description: "Misture todos os tipos de conta",
  },
];

export default function Home() {
  const router = useRouter();

  function handleCategory(category: string) {
    router.push(`/quiz?categoria=${category}`);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <header className="mb-10 text-center">
          <div className="mb-4 text-5xl">📚</div>

          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Matemática Básica
          </h1>

          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Escolha o que você quer estudar hoje.
          </p>
        </header>

        {/* Categorias */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => handleCategory(category.value)}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{category.symbol}</div>

              <h2 className="text-xl font-semibold text-slate-900">
                {category.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {category.description}
              </p>

              <div className="mt-5 text-sm font-medium text-slate-700 transition group-hover:translate-x-1">
                Começar →
              </div>
            </button>
          ))}
        </section>

        {/* Rodapé */}
       <footer className="mt-12 text-center text-sm text-slate-400">
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