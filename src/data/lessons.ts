export type LessonConcept = {
  title: string;
  text: string;
};

export type LessonFormula = {
  title: string;
  content: string;
};

export type LessonExample = {
  title: string;
  question: string;
  steps: string[];
  answer: string;
};

export type Lesson = {
  category: string;
  schoolLevel: "fundamental" | "medio";
  title: string;
  subtitle: string;
  introduction: string;
  concepts: LessonConcept[];
  formula?: LessonFormula;
  examples: LessonExample[];
  commonMistakes: string[];
  examTips: string[];
};

export const lessons: Record<string, Lesson> = {
  adicao: {
    category: "adicao",
    schoolLevel: "fundamental",
    title: "Adição",
    subtitle: "Aprenda a somar valores com segurança",
    introduction:
      "A adição é usada para juntar ou acrescentar quantidades. O símbolo da adição é + e o resultado da operação é chamado de soma.",
    concepts: [
      {
        title: "Unidades, dezenas e centenas",
        text: "Ao montar uma conta, alinhe unidades com unidades, dezenas com dezenas e centenas com centenas.",
      },
      {
        title: "Vai um",
        text: "Quando a soma de uma coluna passa de 9, escrevemos apenas a unidade e levamos uma dezena para a próxima coluna.",
      },
      {
        title: "Conferindo a conta",
        text: "Você pode conferir uma soma usando uma subtração. Se 27 + 15 = 42, então 42 - 15 deve resultar em 27.",
      },
    ],
    examples: [
      {
        title: "Exemplo 1 — Soma simples",
        question: "Quanto é 23 + 14?",
        steps: [
          "Some as unidades: 3 + 4 = 7.",
          "Some as dezenas: 2 + 1 = 3.",
          "Junte os resultados.",
        ],
        answer: "23 + 14 = 37",
      },
      {
        title: "Exemplo 2 — Soma com vai um",
        question: "Quanto é 27 + 15?",
        steps: [
          "Some as unidades: 7 + 5 = 12.",
          "Escreva o 2 na casa das unidades e leve 1 dezena.",
          "Some as dezenas: 2 + 1 + 1 = 4.",
        ],
        answer: "27 + 15 = 42",
      },
      {
        title: "Exemplo 3 — Números maiores",
        question: "Quanto é 348 + 275?",
        steps: [
          "Unidades: 8 + 5 = 13. Escreva 3 e leve 1.",
          "Dezenas: 4 + 7 + 1 = 12. Escreva 2 e leve 1.",
          "Centenas: 3 + 2 + 1 = 6.",
        ],
        answer: "348 + 275 = 623",
      },
    ],
    commonMistakes: [
      "Não alinhar corretamente unidades, dezenas e centenas.",
      "Esquecer de somar o número que foi levado para a próxima coluna.",
      "Trocar o sinal de adição por outro sinal.",
    ],
    examTips: [
      "Monte a conta com calma quando os números forem grandes.",
      "Comece sempre pela direita.",
      "Use uma subtração para conferir quando houver tempo.",
    ],
  },

  subtracao: {
    category: "subtracao",
    schoolLevel: "fundamental",
    title: "Subtração",
    subtitle: "Aprenda a diminuir valores e calcular diferenças",
    introduction:
      "A subtração é usada para retirar uma quantidade de outra ou descobrir a diferença entre dois valores. O símbolo usado é -.",
    concepts: [
      {
        title: "Ordem dos números",
        text: "Na subtração, a ordem dos números importa. 10 - 4 é diferente de 4 - 10.",
      },
      {
        title: "Pedir emprestado",
        text: "Quando o algarismo de cima é menor do que o de baixo, pegamos uma unidade da casa seguinte.",
      },
      {
        title: "Conferência",
        text: "Você pode conferir a subtração somando o resultado ao valor retirado.",
      },
    ],
    examples: [
      {
        title: "Exemplo 1 — Subtração simples",
        question: "Quanto é 48 - 16?",
        steps: ["Unidades: 8 - 6 = 2.", "Dezenas: 4 - 1 = 3."],
        answer: "48 - 16 = 32",
      },
      {
        title: "Exemplo 2 — Pedindo emprestado",
        question: "Quanto é 52 - 28?",
        steps: [
          "Não conseguimos fazer 2 - 8.",
          "Pegamos 1 dezena do 5. O 2 vira 12 e o 5 vira 4.",
          "Unidades: 12 - 8 = 4.",
          "Dezenas: 4 - 2 = 2.",
        ],
        answer: "52 - 28 = 24",
      },
      {
        title: "Exemplo 3 — Número maior",
        question: "Quanto é 500 - 178?",
        steps: [
          "Faça os empréstimos necessários começando pelas unidades.",
          "10 - 8 = 2.",
          "9 - 7 = 2.",
          "4 - 1 = 3.",
        ],
        answer: "500 - 178 = 322",
      },
    ],
    commonMistakes: [
      "Esquecer que a ordem dos números altera o resultado.",
      "Pedir emprestado e não diminuir a casa seguinte.",
      "Subtrair o número maior do menor em cada coluna sem respeitar a conta.",
    ],
    examTips: [
      "Alinhe os números corretamente.",
      "Faça a conta devagar quando houver zeros.",
      "Confira somando o resultado ao número subtraído.",
    ],
  },

  multiplicacao: {
    category: "multiplicacao",
    schoolLevel: "fundamental",
    title: "Multiplicação",
    subtitle: "Entenda multiplicação e tabuada",
    introduction:
      "Multiplicação é uma maneira rápida de representar somas repetidas. Por exemplo, 4 × 3 representa 4 + 4 + 4.",
    concepts: [
      { title: "Fatores e produto", text: "Os números multiplicados são chamados de fatores e o resultado é chamado de produto." },
      { title: "Tabuada", text: "Conhecer a tabuada ajuda a resolver multiplicações com mais rapidez." },
      { title: "Propriedade comutativa", text: "A ordem dos fatores não altera o produto. 4 × 7 é igual a 7 × 4." },
    ],
    examples: [
      {
        title: "Exemplo 1 — Tabuada",
        question: "Quanto é 7 × 6?",
        steps: ["Podemos pensar em 7 grupos de 6.", "6 + 6 + 6 + 6 + 6 + 6 + 6 = 42."],
        answer: "7 × 6 = 42",
      },
      {
        title: "Exemplo 2 — Decomposição",
        question: "Quanto é 12 × 4?",
        steps: ["Separe 12 em 10 + 2.", "10 × 4 = 40.", "2 × 4 = 8.", "Some 40 + 8."],
        answer: "12 × 4 = 48",
      },
      {
        title: "Exemplo 3 — Dois algarismos",
        question: "Quanto é 25 × 12?",
        steps: ["25 × 10 = 250.", "25 × 2 = 50.", "Some 250 + 50."],
        answer: "25 × 12 = 300",
      },
    ],
    commonMistakes: ["Errar a tabuada básica.", "Esquecer de somar os resultados parciais.", "Confundir multiplicação com adição."],
    examTips: ["Revise principalmente as tabuadas de 6, 7, 8 e 9.", "Decomponha números grandes quando isso facilitar.", "Faça uma estimativa para perceber resultados absurdos."],
  },

  divisao: {
    category: "divisao",
    schoolLevel: "fundamental",
    title: "Divisão",
    subtitle: "Aprenda a repartir em partes iguais",
    introduction:
      "A divisão é usada quando queremos repartir uma quantidade em partes iguais ou descobrir quantas vezes um número cabe em outro.",
    concepts: [
      { title: "Dividendo e divisor", text: "O dividendo é o número que será dividido e o divisor é o número pelo qual dividimos." },
      { title: "Quociente", text: "O resultado da divisão é chamado de quociente." },
      { title: "Operação inversa", text: "Divisão e multiplicação são operações inversas. Se 72 ÷ 8 = 9, então 9 × 8 = 72." },
    ],
    examples: [
      { title: "Exemplo 1 — Divisão exata", question: "Quanto é 56 ÷ 7?", steps: ["Pergunte: qual número multiplicado por 7 resulta em 56?", "7 × 8 = 56."], answer: "56 ÷ 7 = 8" },
      { title: "Exemplo 2 — Usando a tabuada", question: "Quanto é 72 ÷ 8?", steps: ["Procure na tabuada do 8.", "8 × 9 = 72."], answer: "72 ÷ 8 = 9" },
      { title: "Exemplo 3 — Número maior", question: "Quanto é 225 ÷ 15?", steps: ["15 × 10 = 150.", "15 × 5 = 75.", "150 + 75 = 225."], answer: "225 ÷ 15 = 15" },
    ],
    commonMistakes: ["Confundir dividendo e divisor.", "Errar a tabuada durante a divisão.", "Não conferir o resultado com uma multiplicação."],
    examTips: ["Use a multiplicação para conferir.", "Procure simplificar mentalmente quando os números permitirem.", "Leia com atenção para saber o que está sendo repartido."],
  },

  porcentagem: {
    category: "porcentagem",
    schoolLevel: "fundamental",
    title: "Porcentagem",
    subtitle: "Aprenda descontos, aumentos e partes de 100",
    introduction: "Porcentagem significa uma quantidade em cada 100 partes. O símbolo % representa 'por cento'.",
    concepts: [
      { title: "Transformando em decimal", text: "Para transformar uma porcentagem em decimal, divida por 100. Exemplo: 20% = 0,20." },
      { title: "Atalhos úteis", text: "50% é a metade, 25% é um quarto e 10% é a décima parte." },
      { title: "Desconto e aumento", text: "Primeiro calculamos a porcentagem sobre o valor inicial e depois subtraímos ou somamos." },
    ],
    formula: { title: "Fórmula básica", content: "porcentagem do valor = (taxa ÷ 100) × valor" },
    examples: [
      { title: "Exemplo 1 — Porcentagem simples", question: "Quanto é 20% de 150?", steps: ["20% = 20 ÷ 100 = 0,20.", "0,20 × 150 = 30."], answer: "20% de 150 = 30" },
      { title: "Exemplo 2 — Desconto", question: "Um produto de R$ 200 tem 10% de desconto. Qual é o preço final?", steps: ["10% de 200 = 20.", "Subtraia o desconto: 200 - 20 = 180."], answer: "Preço final: R$ 180" },
      { title: "Exemplo 3 — Aumento", question: "Um valor de R$ 320 aumenta 15%. Qual é o novo valor?", steps: ["15% de 320 = 48.", "Some o aumento: 320 + 48 = 368."], answer: "Novo valor: R$ 368" },
    ],
    commonMistakes: ["Somar ou subtrair a porcentagem diretamente do valor.", "Esquecer de dividir a taxa por 100.", "Calcular o desconto corretamente, mas esquecer de subtraí-lo do preço."],
    examTips: ["Use atalhos para 10%, 25% e 50%.", "Identifique se a questão pede apenas a porcentagem ou o valor final.", "Leia se é desconto ou aumento."],
  },

  cotidiano: {
    category: "cotidiano",
    schoolLevel: "fundamental",
    title: "Matemática do dia a dia",
    subtitle: "Use matemática em compras, trocos e situações reais",
    introduction: "Muitos problemas de matemática aparecem em situações comuns, como compras, trocos, contas, salários, horários e divisões de despesas.",
    concepts: [
      { title: "Identifique os dados", text: "Antes de calcular, destaque os números importantes do problema." },
      { title: "Descubra a operação", text: "Pergunte se o problema pede juntar, tirar, multiplicar, dividir ou calcular porcentagem." },
      { title: "Confira a unidade", text: "Observe se a resposta deve estar em reais, horas, quilômetros, unidades ou outra medida." },
    ],
    examples: [
      { title: "Exemplo 1 — Troco", question: "Uma compra custa R$ 38 e você paga com R$ 50. Qual é o troco?", steps: ["Valor pago: R$ 50.", "Valor da compra: R$ 38.", "Faça 50 - 38."], answer: "Troco: R$ 12" },
      { title: "Exemplo 2 — Divisão de conta", question: "Uma conta de R$ 180 será dividida entre 6 pessoas. Quanto cada uma paga?", steps: ["A conta será repartida igualmente.", "Faça 180 ÷ 6."], answer: "Cada pessoa paga R$ 30" },
      { title: "Exemplo 3 — Orçamento", question: "Uma pessoa recebe R$ 1.500 e gasta R$ 980. Quanto sobra?", steps: ["Receita: R$ 1.500.", "Gasto: R$ 980.", "Faça 1.500 - 980."], answer: "Sobra R$ 520" },
    ],
    commonMistakes: ["Começar a calcular sem entender o que a questão pede.", "Escolher uma operação errada.", "Esquecer a unidade da resposta."],
    examTips: ["Leia o problema duas vezes.", "Sublinhe mentalmente os valores importantes.", "Antes de responder, veja se o resultado faz sentido."],
  },

  "equacao-primeiro-grau": {
    category: "equacao-primeiro-grau",
    schoolLevel: "medio",
    title: "Equação do 1º grau",
    subtitle: "Aprenda a encontrar o valor da incógnita",
    introduction: "Uma equação do 1º grau possui uma incógnita com expoente 1. O objetivo é descobrir o valor que torna a igualdade verdadeira.",
    concepts: [
      { title: "Incógnita", text: "A letra, geralmente x, representa um valor desconhecido." },
      { title: "Operações inversas", text: "Para isolar x, usamos operações inversas: soma com subtração e multiplicação com divisão." },
      { title: "Equilíbrio da igualdade", text: "Tudo que fazemos de um lado da equação deve manter a igualdade válida." },
    ],
    formula: { title: "Forma geral", content: "ax + b = 0, com a diferente de 0" },
    examples: [
      { title: "Exemplo 1 — Equação simples", question: "Resolva x + 7 = 15.", steps: ["Subtraia 7 dos dois lados.", "x = 15 - 7."], answer: "x = 8" },
      { title: "Exemplo 2 — Com multiplicação", question: "Resolva 3x + 5 = 20.", steps: ["Passe o +5 para o outro lado como -5.", "3x = 15.", "Divida os dois lados por 3."], answer: "x = 5" },
      { title: "Exemplo 3 — Com parênteses", question: "Resolva 4(x - 2) = 2x + 10.", steps: ["Distribua o 4: 4x - 8 = 2x + 10.", "Passe 2x para a esquerda: 2x - 8 = 10.", "Passe -8 para a direita: 2x = 18.", "Divida por 2."], answer: "x = 9" },
    ],
    commonMistakes: ["Trocar o sinal de forma incorreta ao mover termos.", "Dividir apenas uma parte da equação.", "Esquecer de distribuir um número pelos termos dentro do parêntese."],
    examTips: ["Tente deixar todos os termos com x de um lado.", "Deixe os números sem x do outro lado.", "Substitua a resposta na equação original para conferir."],
  },

  "equacao-segundo-grau": {
    category: "equacao-segundo-grau",
    schoolLevel: "medio",
    title: "Equação do 2º grau",
    subtitle: "Aprenda Δ e fórmula de Bhaskara passo a passo",
    introduction: "Uma equação do 2º grau apresenta a incógnita elevada ao quadrado e pode ser escrita na forma ax² + bx + c = 0, com a diferente de zero.",
    concepts: [
      { title: "Identificando a, b e c", text: "a acompanha x², b acompanha x e c é o termo independente." },
      { title: "Discriminante Δ", text: "Se Δ > 0 há duas raízes reais; se Δ = 0 há uma raiz real dupla; se Δ < 0 não há raízes reais." },
      { title: "Bhaskara", text: "Depois de calcular Δ, usamos a fórmula de Bhaskara para encontrar as raízes." },
    ],
    formula: { title: "Fórmulas", content: "Δ = b² - 4ac\n\nx = (-b ± √Δ) / 2a" },
    examples: [
      { title: "Exemplo 1 — Identificando coeficientes", question: "Na equação x² - 5x + 6 = 0, quais são a, b e c?", steps: ["Compare com ax² + bx + c = 0.", "O coeficiente de x² é 1.", "O coeficiente de x é -5.", "O termo independente é 6."], answer: "a = 1, b = -5 e c = 6" },
      { title: "Exemplo 2 — Calculando o Δ", question: "Calcule o Δ de x² - 5x + 6 = 0.", steps: ["Use Δ = b² - 4ac.", "Δ = (-5)² - 4 × 1 × 6.", "Δ = 25 - 24."], answer: "Δ = 1" },
      { title: "Exemplo 3 — Encontrando as raízes", question: "Resolva x² - 5x + 6 = 0.", steps: ["Já sabemos que Δ = 1.", "x = (5 ± √1) / 2.", "x₁ = (5 + 1) / 2 = 3.", "x₂ = (5 - 1) / 2 = 2."], answer: "x₁ = 3 e x₂ = 2" },
    ],
    commonMistakes: ["Esquecer o sinal negativo de b.", "Calcular b² incorretamente quando b é negativo.", "Esquecer o ± na fórmula.", "Dividir apenas √Δ por 2a."],
    examTips: ["Escreva a, b e c antes de fazer qualquer conta.", "Calcule Δ separadamente.", "Use parênteses ao substituir números negativos.", "Confira as raízes se houver tempo."],
  },

  funcoes: {
    category: "funcoes",
    schoolLevel: "medio",
    title: "Funções",
    subtitle: "Entenda relações, valores e gráficos",
    introduction: "Uma função relaciona valores de entrada a valores de saída. Em uma função, cada valor de x possui um único valor correspondente de y.",
    concepts: [
      { title: "Lei da função", text: "A expressão f(x) mostra como calcular o valor de saída a partir de x." },
      { title: "Função do 1º grau", text: "Tem a forma f(x) = ax + b. Seu gráfico é uma reta." },
      { title: "Zero da função", text: "É o valor de x para o qual f(x) = 0." },
    ],
    formula: { title: "Função afim", content: "f(x) = ax + b" },
    examples: [
      { title: "Exemplo 1 — Calculando f(x)", question: "Se f(x) = 2x + 3, quanto vale f(4)?", steps: ["Substitua x por 4.", "f(4) = 2 × 4 + 3.", "f(4) = 8 + 3."], answer: "f(4) = 11" },
      { title: "Exemplo 2 — Zero da função", question: "Qual é o zero de f(x) = 5x - 10?", steps: ["Faça f(x) = 0.", "5x - 10 = 0.", "5x = 10.", "x = 2."], answer: "O zero da função é 2" },
      { title: "Exemplo 3 — Coeficiente angular", question: "Na função y = -2x + 6, qual é o coeficiente angular?", steps: ["Compare com y = ax + b.", "O número que acompanha x é a."], answer: "a = -2" },
    ],
    commonMistakes: ["Substituir x de maneira errada.", "Confundir coeficiente angular com termo independente.", "Esquecer que o zero da função ocorre quando y = 0."],
    examTips: ["Identifique a e b antes de interpretar uma função afim.", "Substitua valores com parênteses quando x for negativo.", "Associe função do 1º grau a uma reta."],
  },

  potenciacao: {
    category: "potenciacao",
    schoolLevel: "medio",
    title: "Potenciação",
    subtitle: "Aprenda propriedades de potências",
    introduction: "Potenciação representa multiplicações repetidas de uma mesma base e possui regras que facilitam operações com expoentes.",
    concepts: [
      { title: "Base e expoente", text: "Na expressão aⁿ, a é a base e n é o expoente." },
      { title: "Mesma base na multiplicação", text: "Ao multiplicar potências de mesma base, somamos os expoentes." },
      { title: "Expoente negativo", text: "Um expoente negativo representa o inverso da potência correspondente." },
    ],
    formula: { title: "Propriedades", content: "aᵐ × aⁿ = aᵐ⁺ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁻ⁿ = 1/aⁿ" },
    examples: [
      { title: "Exemplo 1 — Potência simples", question: "Quanto é 3⁴?", steps: ["Multiplique a base 3 por ela mesma quatro vezes.", "3 × 3 × 3 × 3 = 81."], answer: "3⁴ = 81" },
      { title: "Exemplo 2 — Mesma base", question: "Quanto é 2³ × 2⁴?", steps: ["As bases são iguais.", "Some os expoentes: 3 + 4 = 7."], answer: "2⁷" },
      { title: "Exemplo 3 — Expoente negativo", question: "Quanto vale 2⁻³?", steps: ["Expoente negativo inverte a potência.", "2⁻³ = 1/2³.", "2³ = 8."], answer: "2⁻³ = 1/8" },
    ],
    commonMistakes: ["Multiplicar expoentes quando deveria somá-los.", "Confundir potência com multiplicação simples.", "Esquecer que expoente negativo gera o inverso."],
    examTips: ["Observe se as bases são iguais antes de aplicar propriedades.", "Reescreva potências quando isso facilitar.", "Tenha atenção especial a expoentes zero e negativos."],
  },

  radiciacao: {
    category: "radiciacao",
    schoolLevel: "medio",
    title: "Radiciação",
    subtitle: "Aprenda raízes e simplificações",
    introduction: "Radiciação é a operação inversa da potenciação. Ela procura um número que, elevado a determinado expoente, produza o valor dentro do radical.",
    concepts: [
      { title: "Raiz quadrada", text: "√a procura um número que, multiplicado por ele mesmo, resulte em a." },
      { title: "Raiz cúbica", text: "∛a procura um número que, elevado ao cubo, resulte em a." },
      { title: "Simplificação", text: "Podemos separar fatores que são quadrados perfeitos para simplificar radicais." },
    ],
    examples: [
      { title: "Exemplo 1 — Raiz quadrada", question: "Qual é √144?", steps: ["Procure um número cujo quadrado seja 144.", "12 × 12 = 144."], answer: "√144 = 12" },
      { title: "Exemplo 2 — Raiz cúbica", question: "Qual é ∛125?", steps: ["Procure um número cujo cubo seja 125.", "5 × 5 × 5 = 125."], answer: "∛125 = 5" },
      { title: "Exemplo 3 — Simplificando radical", question: "Simplifique √50.", steps: ["Fatore 50 como 25 × 2.", "√50 = √25 × √2.", "√25 = 5."], answer: "√50 = 5√2" },
    ],
    commonMistakes: ["Somar números dentro de raízes como se fossem termos comuns.", "Esquecer de procurar fatores quadrados perfeitos.", "Confundir raiz quadrada com divisão por 2."],
    examTips: ["Memorize quadrados perfeitos comuns.", "Tente fatorar o radicando.", "Confira raízes exatas usando potenciação."],
  },

  "razao-proporcao": {
    category: "razao-proporcao",
    schoolLevel: "medio",
    title: "Razão e proporção",
    subtitle: "Aprenda comparações e regra de três",
    introduction: "Razão compara duas grandezas. Proporção é a igualdade entre duas razões e aparece frequentemente em regra de três, escalas e problemas do cotidiano.",
    concepts: [
      { title: "Razão", text: "A razão entre a e b pode ser escrita como a/b." },
      { title: "Grandezas diretamente proporcionais", text: "Quando uma aumenta e a outra também aumenta na mesma proporção." },
      { title: "Grandezas inversamente proporcionais", text: "Quando uma aumenta e a outra diminui proporcionalmente." },
    ],
    formula: { title: "Proporção", content: "a/b = c/d  →  a × d = b × c" },
    examples: [
      { title: "Exemplo 1 — Razão simples", question: "Qual é a razão entre 8 e 4?", steps: ["Escreva 8/4.", "Simplifique a divisão."], answer: "A razão é 2" },
      { title: "Exemplo 2 — Regra de três direta", question: "Se 3 cadernos custam R$ 18, quanto custam 5?", steps: ["Descubra o valor unitário: 18 ÷ 3 = 6.", "Multiplique 6 × 5."], answer: "R$ 30" },
      { title: "Exemplo 3 — Proporção inversa", question: "5 trabalhadores fazem um serviço em 12 dias. Em quantos dias 10 trabalhadores fariam o mesmo serviço?", steps: ["Mais trabalhadores significam menos dias.", "Use proporção inversa: 5 × 12 = 10 × x.", "60 = 10x.", "x = 6."], answer: "6 dias" },
    ],
    commonMistakes: ["Não perceber se as grandezas são diretas ou inversas.", "Organizar valores em posições incompatíveis.", "Errar a multiplicação cruzada."],
    examTips: ["Pergunte primeiro como uma grandeza reage quando a outra aumenta.", "Mantenha unidades equivalentes.", "Faça uma estimativa para conferir a resposta."],
  },

  "pa-pg": {
    category: "pa-pg",
    schoolLevel: "medio",
    title: "PA e PG",
    subtitle: "Progressões aritméticas e geométricas",
    introduction: "PA e PG são sequências numéricas. Na PA, somamos uma razão constante. Na PG, multiplicamos por uma razão constante.",
    concepts: [
      { title: "PA", text: "Na progressão aritmética, a diferença entre termos consecutivos é constante." },
      { title: "PG", text: "Na progressão geométrica, a divisão entre termos consecutivos é constante." },
      { title: "Termo geral", text: "As fórmulas permitem encontrar qualquer termo sem listar toda a sequência." },
    ],
    formula: { title: "Fórmulas principais", content: "PA: aₙ = a₁ + (n - 1)r\nPG: aₙ = a₁ × qⁿ⁻¹" },
    examples: [
      { title: "Exemplo 1 — Razão da PA", question: "Na PA 3, 6, 9, 12, qual é a razão?", steps: ["Subtraia termos consecutivos.", "6 - 3 = 3.", "9 - 6 = 3."], answer: "r = 3" },
      { title: "Exemplo 2 — Termo da PA", question: "Qual é o 10º termo da PA 2, 5, 8, 11, ...?", steps: ["a₁ = 2, r = 3 e n = 10.", "a₁₀ = 2 + (10 - 1) × 3.", "a₁₀ = 2 + 27."], answer: "a₁₀ = 29" },
      { title: "Exemplo 3 — Termo da PG", question: "Qual é o 5º termo da PG 3, 6, 12, 24, ...?", steps: ["A razão é 2.", "Multiplique o quarto termo por 2.", "24 × 2 = 48."], answer: "O 5º termo é 48" },
    ],
    commonMistakes: ["Confundir razão de PA com razão de PG.", "Usar n no lugar de n - 1.", "Somar quando deveria multiplicar em uma PG."],
    examTips: ["Primeiro identifique se é PA ou PG.", "Anote a₁, r ou q e n.", "Confira os primeiros termos antes de usar a fórmula."],
  },

  geometria: {
    category: "geometria",
    schoolLevel: "medio",
    title: "Geometria",
    subtitle: "Áreas, perímetros, diagonais e volumes",
    introduction: "Geometria estuda formas, medidas, distâncias, áreas e volumes. Muitas questões exigem reconhecer a figura e escolher a fórmula correta.",
    concepts: [
      { title: "Perímetro", text: "É a soma dos comprimentos dos lados de uma figura." },
      { title: "Área", text: "Mede a superfície ocupada por uma figura plana." },
      { title: "Volume", text: "Mede o espaço ocupado por um sólido." },
    ],
    formula: { title: "Fórmulas úteis", content: "Retângulo: A = b × h\nTriângulo: A = (b × h)/2\nCírculo: A = πr²\nCilindro: V = πr²h" },
    examples: [
      { title: "Exemplo 1 — Área do retângulo", question: "Qual é a área de um retângulo de 8 cm por 5 cm?", steps: ["Use A = base × altura.", "A = 8 × 5."], answer: "40 cm²" },
      { title: "Exemplo 2 — Área do triângulo", question: "Qual é a área de um triângulo com base 10 cm e altura 6 cm?", steps: ["Use A = base × altura ÷ 2.", "A = 10 × 6 ÷ 2."], answer: "30 cm²" },
      { title: "Exemplo 3 — Área do círculo", question: "Usando π ≈ 3,14, qual é a área de um círculo de raio 5 cm?", steps: ["Use A = πr².", "A = 3,14 × 5².", "A = 3,14 × 25."], answer: "78,5 cm²" },
    ],
    commonMistakes: ["Confundir área com perímetro.", "Esquecer unidades quadradas ou cúbicas.", "Usar diâmetro no lugar do raio."],
    examTips: ["Desenhe a figura quando necessário.", "Anote todas as medidas.", "Verifique se a resposta deve ser em cm, cm² ou cm³."],
  },

  trigonometria: {
    category: "trigonometria",
    schoolLevel: "medio",
    title: "Trigonometria",
    subtitle: "Seno, cosseno, tangente e triângulos retângulos",
    introduction: "A trigonometria estuda relações entre ângulos e lados de triângulos. No ensino médio, seno, cosseno e tangente são fundamentais.",
    concepts: [
      { title: "Hipotenusa", text: "É o maior lado do triângulo retângulo e fica oposto ao ângulo de 90°." },
      { title: "Cateto oposto", text: "É o cateto que fica em frente ao ângulo analisado." },
      { title: "Cateto adjacente", text: "É o cateto que fica ao lado do ângulo analisado." },
    ],
    formula: { title: "Relações trigonométricas", content: "sen θ = cateto oposto / hipotenusa\ncos θ = cateto adjacente / hipotenusa\ntan θ = cateto oposto / cateto adjacente" },
    examples: [
      { title: "Exemplo 1 — Seno", question: "Se o cateto oposto mede 3 e a hipotenusa mede 6, qual é o seno?", steps: ["Use sen = oposto / hipotenusa.", "sen = 3/6.", "Simplifique."], answer: "sen = 1/2 = 0,5" },
      { title: "Exemplo 2 — Ângulo notável", question: "Quanto vale sen 30°?", steps: ["Esse é um valor trigonométrico notável.", "sen 30° = 1/2."], answer: "1/2" },
      { title: "Exemplo 3 — Pitágoras", question: "Um triângulo retângulo possui catetos 3 e 4. Quanto mede a hipotenusa?", steps: ["Use a² + b² = c².", "3² + 4² = c².", "9 + 16 = 25.", "c = √25."], answer: "c = 5" },
    ],
    commonMistakes: ["Confundir cateto oposto com adjacente.", "Usar a relação trigonométrica errada.", "Confundir hipotenusa com um cateto."],
    examTips: ["Marque o ângulo analisado no desenho.", "Identifique primeiro hipotenusa, oposto e adjacente.", "Memorize sen 30°, 45° e 60°."],
  },

  probabilidade: {
    category: "probabilidade",
    schoolLevel: "medio",
    title: "Probabilidade",
    subtitle: "Aprenda a calcular chances de eventos",
    introduction: "Probabilidade mede a chance de um evento acontecer. Em situações simples, dividimos o número de casos favoráveis pelo número total de casos possíveis.",
    concepts: [
      { title: "Espaço amostral", text: "É o conjunto de todos os resultados possíveis." },
      { title: "Evento", text: "É o resultado ou conjunto de resultados que queremos analisar." },
      { title: "Probabilidade simples", text: "Quando os resultados são igualmente prováveis, usamos casos favoráveis dividido por casos possíveis." },
    ],
    formula: { title: "Fórmula básica", content: "P(A) = casos favoráveis / casos possíveis" },
    examples: [
      { title: "Exemplo 1 — Moeda", question: "Qual é a probabilidade de sair cara ao lançar uma moeda?", steps: ["Resultados possíveis: cara e coroa.", "Casos favoráveis: 1.", "Casos possíveis: 2."], answer: "1/2 = 50%" },
      { title: "Exemplo 2 — Dado", question: "Qual é a probabilidade de sair 6 em um dado comum?", steps: ["Há 6 resultados possíveis.", "Apenas um deles é o número 6."], answer: "1/6" },
      { title: "Exemplo 3 — Urna", question: "Uma urna tem 3 bolas vermelhas e 2 azuis. Qual é a probabilidade de retirar uma vermelha?", steps: ["Total de bolas: 5.", "Bolas vermelhas: 3.", "P = 3/5."], answer: "3/5 = 60%" },
    ],
    commonMistakes: ["Contar incorretamente o total de casos possíveis.", "Confundir favoráveis com possíveis.", "Esquecer de simplificar a fração."],
    examTips: ["Liste os resultados quando o espaço amostral for pequeno.", "Confira se todos os resultados têm a mesma chance.", "Converta para porcentagem apenas se a questão pedir."],
  },

  estatistica: {
    category: "estatistica",
    schoolLevel: "medio",
    title: "Estatística",
    subtitle: "Média, mediana, moda e análise de dados",
    introduction: "Estatística ajuda a organizar e interpretar informações. Média, mediana, moda e amplitude aparecem com frequência em provas.",
    concepts: [
      { title: "Média", text: "Some todos os valores e divida pela quantidade de valores." },
      { title: "Mediana", text: "Coloque os valores em ordem e encontre o valor central." },
      { title: "Moda", text: "É o valor que aparece com maior frequência." },
    ],
    formula: { title: "Média aritmética", content: "média = soma dos valores / quantidade de valores" },
    examples: [
      { title: "Exemplo 1 — Média", question: "Qual é a média de 6, 8 e 10?", steps: ["Some: 6 + 8 + 10 = 24.", "Há 3 valores.", "Divida 24 por 3."], answer: "Média = 8" },
      { title: "Exemplo 2 — Mediana", question: "Qual é a mediana de 2, 4, 7, 9 e 12?", steps: ["Os valores já estão ordenados.", "O valor central é o terceiro."], answer: "Mediana = 7" },
      { title: "Exemplo 3 — Moda", question: "Qual é a moda de 2, 3, 3, 5, 7, 3 e 8?", steps: ["Conte quantas vezes cada número aparece.", "O número 3 aparece três vezes."], answer: "Moda = 3" },
    ],
    commonMistakes: ["Esquecer de ordenar os dados para encontrar a mediana.", "Confundir moda com média.", "Dividir a soma pelo número errado de elementos."],
    examTips: ["Conte quantos valores existem antes de calcular a média.", "Ordene sempre os dados para mediana.", "Leia tabelas e gráficos com atenção aos eixos."],
  },

  "matematica-financeira": {
    category: "matematica-financeira",
    schoolLevel: "medio",
    title: "Matemática financeira",
    subtitle: "Descontos, aumentos e juros",
    introduction: "Matemática financeira aplica porcentagens a situações com dinheiro. Ela aparece em descontos, aumentos, empréstimos, investimentos e juros.",
    concepts: [
      { title: "Capital", text: "É o valor inicial de uma aplicação ou dívida." },
      { title: "Juros", text: "É o valor acrescentado ao capital ao longo do tempo." },
      { title: "Montante", text: "É a soma do capital com os juros." },
    ],
    formula: { title: "Fórmulas principais", content: "Juros simples: J = C × i × t\nMontante simples: M = C + J\nJuros compostos: M = C × (1 + i)ᵗ" },
    examples: [
      { title: "Exemplo 1 — Desconto", question: "Um produto custa R$ 200 e recebe 10% de desconto. Qual é o preço final?", steps: ["10% de 200 = 20.", "Subtraia o desconto: 200 - 20."], answer: "R$ 180" },
      { title: "Exemplo 2 — Juros simples", question: "Qual é o juro de R$ 1.000 a 2% ao mês durante 3 meses?", steps: ["C = 1.000, i = 0,02 e t = 3.", "J = 1.000 × 0,02 × 3."], answer: "J = R$ 60" },
      { title: "Exemplo 3 — Juros compostos", question: "R$ 1.000 aplicados a 10% por 2 períodos resultam em quanto?", steps: ["Use M = C × (1 + i)ᵗ.", "M = 1.000 × 1,1².", "1,1² = 1,21."], answer: "M = R$ 1.210" },
    ],
    commonMistakes: ["Usar 10 em vez de 0,10 para representar 10%.", "Confundir juros simples com compostos.", "Esquecer de somar os juros ao capital quando a questão pede montante."],
    examTips: ["Anote C, i e t antes de usar a fórmula.", "Converta a porcentagem para decimal.", "Confira se taxa e tempo estão na mesma unidade."],
  },
};
