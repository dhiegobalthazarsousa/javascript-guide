/**
 * ============================================================
 * JAVASCRIPT: O GUIA DEFINITIVO — GUIA DE ESTUDOS INTERATIVO
 * app.js — Dados dos capítulos e lógica de interface
 * ============================================================
 */

/* ─── DADOS DOS CAPÍTULOS (Parte I — Caps. 1–12) ───────────── */
const CHAPTERS = [
  {
    num: 1,
    title: "Introdução ao JavaScript",
    summary:
      "Apresenta JavaScript como uma linguagem de alto nível, dinâmica, interpretada e orientada a objetos. Explora sua história — criada por Brendan Eich em 1995 na Netscape —, seu papel central na web e as três camadas tecnológicas (HTML, CSS e JavaScript). Estabelece o tom para o restante do livro.",
    topics: [
      {
        name: "O que é JavaScript?",
        desc: "Linguagem de programação de alto nível, dinâmica, orientada a objetos e baseada em protótipos. Interpretada (ou compilada JIT) nos navegadores e em ambientes como Node.js.",
      },
      {
        name: "Breve história da linguagem",
        desc: "Criada por Brendan Eich em 1995 para a Netscape Navigator. Padronizada como ECMAScript pela ECMA International (ECMA-262). Evolução de ES1 até o ES6/ES2015 e versões anuais posteriores.",
      },
      {
        name: "JavaScript no navegador",
        desc: "Executa scripts embutidos no HTML, manipula o DOM, responde a eventos de usuário e realiza comunicação assíncrona (Ajax/Fetch) com servidores.",
      },
      {
        name: "JavaScript no servidor (Node.js)",
        desc: "Ambiente de execução criado por Ryan Dahl em 2009. Permite usar JavaScript para backend, scripts, ferramentas de linha de comando e APIs REST.",
      },
      {
        name: "JavaScript e ECMAScript",
        desc: "ECMAScript é o padrão da linguagem; JavaScript é a implementação mais conhecida. Versões ES3, ES5, ES6 (2015) e updates anuais (ES2016–ES2024).",
      },
      {
        name: "Primeiros passos — Hello, World!",
        desc: "Demonstração do ambiente básico: uso de console.log(), scripts em HTML com a tag <script>, e ferramentas de desenvolvedor do navegador (DevTools).",
      },
    ],
    codeExamples: [
      {
        caption: "hello.js — Olá, Mundo!",
        code: `<span class="cmt">// Exibe uma mensagem no console</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Olá, Mundo!"</span>);

<span class="cmt">// Em um navegador, também é possível usar:</span>
<span class="fn">alert</span>(<span class="str">"Bem-vindo ao JavaScript!"</span>);`,
      },
    ],
  },

  {
    num: 2,
    title: "Estrutura léxica",
    summary:
      "Descreve as regras de mais baixo nível que governam a escrita de programas JavaScript: o conjunto de caracteres, os comentários, os literais, os identificadores e as palavras reservadas. Fundamental para compreender como o interpretador lê e tokeniza o código-fonte.",
    topics: [
      {
        name: "Conjunto de caracteres (Unicode)",
        desc: "JavaScript usa Unicode. Os identificadores podem conter letras, dígitos, $ e _, mas não podem começar com um dígito. Unicode permite usar caracteres de qualquer idioma.",
      },
      {
        name: "Comentários",
        desc: "Comentários de linha única com // e comentários de bloco com /* ... */. Comentários são ignorados pelo interpretador e servem para documentação.",
      },
      {
        name: "Literais",
        desc: "Valores escritos diretamente no código: números (42, 3.14), strings ('texto', \"texto\"), booleanos (true, false), null e undefined.",
      },
      {
        name: "Identificadores e palavras reservadas",
        desc: "Identificadores nomeiam variáveis, funções e classes. Palavras reservadas (var, let, const, function, class, return, if, else, etc.) têm significado especial e não podem ser usadas como identificadores.",
      },
      {
        name: "Diferenciação de maiúsculas e minúsculas (case-sensitive)",
        desc: "JavaScript diferencia maiúsculas de minúsculas: 'minhaVar' e 'minhaVAR' são dois identificadores distintos.",
      },
      {
        name: "Ponto e vírgula (ASI — Automatic Semicolon Insertion)",
        desc: "O ponto e vírgula separa instruções. JavaScript insere automaticamente ponto e vírgula em certas situações (ASI), mas é uma boa prática usá-lo explicitamente para evitar ambiguidades.",
      },
      {
        name: "Espaço em branco e quebras de linha",
        desc: "Espaços, tabulações e quebras de linha são geralmente ignorados (exceto em strings). Usados para formatar e tornar o código legível.",
      },
    ],
    codeExamples: [
      {
        caption: "lexica.js — Estrutura léxica básica",
        code: `<span class="cmt">// Comentário de linha única</span>
<span class="cmt">/* Comentário
   de múltiplas linhas */</span>

<span class="kw">let</span> <span class="var">nome</span> = <span class="str">"Ana"</span>;   <span class="cmt">// identificador + literal string</span>
<span class="kw">let</span> <span class="var">idade</span> = <span class="num">30</span>;      <span class="cmt">// literal numérico</span>
<span class="kw">let</span> <span class="var">ativo</span> = <span class="kw">true</span>;   <span class="cmt">// literal booleano</span>
<span class="kw">let</span> <span class="var">vazio</span> = <span class="kw">null</span>;   <span class="cmt">// literal null</span>`,
      },
    ],
  },

  {
    num: 3,
    title: "Tipos, valores e variáveis",
    summary:
      "Cobre o sistema de tipos de JavaScript — primitivos e objetos. Explora como declarar variáveis com var, let e const, o conceito de escopo, o sistema de conversão de tipos e os valores especiais como null, undefined, NaN e Infinity.",
    topics: [
      {
        name: "Tipos primitivos",
        desc: "JavaScript possui 7 tipos primitivos: number, string, boolean, undefined, null, symbol (ES6) e bigint (ES2020). São imutáveis e passados por valor.",
      },
      {
        name: "O tipo Number",
        desc: "JavaScript usa ponto flutuante de precisão dupla (IEEE 754 64-bit). Suporta inteiros, decimais, hexadecimais (0x), octais (0o), binários (0b), Infinity e NaN.",
      },
      {
        name: "O tipo String",
        desc: "Sequência de caracteres Unicode. Delimitadas por aspas simples, duplas ou template literals (backticks). São imutáveis; operações produzem novas strings.",
      },
      {
        name: "Template Literals (ES6)",
        desc: "Strings delimitadas por backticks que permitem interpolação de expressões com ${expressão} e strings multilinhas sem precisar de \\n.",
      },
      {
        name: "O tipo Boolean",
        desc: "Apenas dois valores: true e false. Valores falsy: false, 0, -0, 0n, \"\", null, undefined, NaN. Todos os outros são truthy.",
      },
      {
        name: "null e undefined",
        desc: "null representa a ausência intencional de um valor. undefined é o valor padrão de variáveis não inicializadas, parâmetros ausentes e propriedades inexistentes.",
      },
      {
        name: "Symbol e BigInt",
        desc: "Symbol (ES6): valor único e imutável, útil como chave de objeto única. BigInt (ES2020): inteiros de precisão arbitrária, criados com sufixo n (ex: 9007199254740991n).",
      },
      {
        name: "Tipos Objeto (Object)",
        desc: "Tudo que não é primitivo é um objeto: objetos literais {}, arrays [], funções, datas, RegExp, Map, Set etc. Passados por referência.",
      },
      {
        name: "Declaração de variáveis: var, let e const",
        desc: "var: escopo de função, içada (hoisting). let: escopo de bloco, não içada de forma utilizável. const: escopo de bloco, referência imutável (o valor do objeto pode mudar).",
      },
      {
        name: "Conversão de tipos",
        desc: "JavaScript converte tipos automaticamente (coerção implícita) em operações. Funções de conversão explícita: Number(), String(), Boolean(), parseInt(), parseFloat().",
      },
    ],
    codeExamples: [
      {
        caption: "tipos.js — Tipos e variáveis",
        code: `<span class="cmt">// Primitivos</span>
<span class="kw">let</span> <span class="var">num</span>   = <span class="num">42</span>;
<span class="kw">let</span> <span class="var">texto</span> = <span class="str">"Olá"</span>;
<span class="kw">let</span> <span class="var">ok</span>    = <span class="kw">true</span>;
<span class="kw">let</span> <span class="var">grand</span> = <span class="num">9007199254740993n</span>;  <span class="cmt">// BigInt</span>

<span class="cmt">// Template literal</span>
<span class="kw">const</span> <span class="var">msg</span> = <span class="str">\`Número: <span class="op">\${</span>num<span class="op">}</span>\`</span>;

<span class="cmt">// Conversão de tipo</span>
<span class="fn">Number</span>(<span class="str">"3.14"</span>)  <span class="cmt">// → 3.14</span>
<span class="fn">String</span>(<span class="num">100</span>)    <span class="cmt">// → "100"</span>
<span class="fn">Boolean</span>(<span class="num">0</span>)    <span class="cmt">// → false</span>`,
      },
    ],
  },

  {
    num: 4,
    title: "Expressões e operadores",
    summary:
      "Catalogação completa dos operadores de JavaScript: aritméticos, relacionais, lógicos, de atribuição, bit a bit, ternário e os operadores modernos do ES6+. Explora como expressões são avaliadas e a precedência de operadores.",
    topics: [
      {
        name: "Expressões primárias",
        desc: "Literais (42, 'texto', true), variáveis (identificadores), this e array/objeto literais ([1,2], {a:1}).",
      },
      {
        name: "Operadores aritméticos",
        desc: "Adição (+), subtração (-), multiplicação (*), divisão (/), módulo (%), exponenciação (**), incremento (++) e decremento (--). O operador + também concatena strings.",
      },
      {
        name: "Operadores relacionais e de igualdade",
        desc: "==, != realizam coerção de tipo. === e !== (igualdade estrita) comparam sem coerção. <, >, <=, >= comparam números e strings. instanceof e in verificam tipo e propriedade.",
      },
      {
        name: "Operadores lógicos",
        desc: "&& (AND), || (OR) e ! (NOT). Avaliam em curto-circuito e retornam um dos operandos, não necessariamente um booleano. Essenciais para controle de fluxo condicional.",
      },
      {
        name: "Operadores de atribuição",
        desc: "= básico e combinados: +=, -=, *=, /=, %=, **=, &&=, ||=, ??=. O operador de coalescência nula (??) retorna o operando direito se o esquerdo for null ou undefined.",
      },
      {
        name: "Operador ternário (condicional)",
        desc: "condição ? valorSeVerdadeiro : valorSeFalso. Substitui if/else simples em expressões.",
      },
      {
        name: "Operadores de cadeia opcional (?.)",
        desc: "obj?.prop e obj?.[key] retornam undefined em vez de lançar erro se obj for null ou undefined. Útil para acessar propriedades aninhadas com segurança.",
      },
      {
        name: "typeof, void, delete e spread (...)",
        desc: "typeof retorna o tipo como string. void avalia e descarta. delete remove propriedade de objeto. Spread (...) expande iteráveis em chamadas de função ou arrays.",
      },
      {
        name: "Precedência de operadores",
        desc: "A ordem em que operadores são avaliados. Parênteses sobrescrevem qualquer precedência. Da maior para menor: !, **, *,/,%, +,-, relacionais, ==, &&, ||, ??, ?:, atribuição.",
      },
    ],
    codeExamples: [
      {
        caption: "operadores.js — Exemplos práticos",
        code: `<span class="cmt">// Curto-circuito lógico</span>
<span class="kw">const</span> <span class="var">nome</span> = <span class="kw">null</span> <span class="op">||</span> <span class="str">"Padrão"</span>;   <span class="cmt">// "Padrão"</span>
<span class="kw">const</span> <span class="var">cfg</span>  = <span class="kw">null</span> <span class="op">??</span> <span class="str">"Padrão"</span>;   <span class="cmt">// "Padrão"</span>

<span class="cmt">// Encadeamento opcional</span>
<span class="kw">const</span> <span class="var">cidade</span> = <span class="var">usuario</span><span class="op">?.</span><span class="var">endereco</span><span class="op">?.</span><span class="var">cidade</span>;

<span class="cmt">// Ternário</span>
<span class="kw">const</span> <span class="var">status</span> = <span class="var">ativo</span> <span class="op">?</span> <span class="str">"online"</span> <span class="op">:</span> <span class="str">"offline"</span>;

<span class="cmt">// typeof</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="num">42</span>);       <span class="cmt">// "number"</span>
<span class="fn">console</span>.<span class="fn">log</span>(<span class="kw">typeof</span> <span class="str">"texto"</span>);  <span class="cmt">// "string"</span>`,
      },
    ],
  },

  {
    num: 5,
    title: "Instruções",
    summary:
      "Cobre toda a gama de instruções (statements) de JavaScript: condicionais, laços de repetição, transferência de controle, tratamento de erros e declarações. Instruções formam o esqueleto executável de qualquer programa.",
    topics: [
      {
        name: "Instruções de expressão e de bloco",
        desc: "Qualquer expressão seguida de ; é uma instrução. Um bloco {} agrupa múltiplas instruções e define escopo para let e const.",
      },
      {
        name: "if / else e if / else if",
        desc: "Controle condicional básico. Avalia uma expressão booleana e executa um ramo ou o outro. O else if encadeia múltiplas condições.",
      },
      {
        name: "switch",
        desc: "Avalia uma expressão e compara (com ===) contra múltiplos cases. Requer break para evitar fall-through. O case default é executado se nenhum caso corresponder.",
      },
      {
        name: "Laços: while e do...while",
        desc: "while avalia a condição antes de cada iteração. do...while garante pelo menos uma execução. Ambos executam enquanto a condição for verdadeira.",
      },
      {
        name: "Laços: for, for...in e for...of",
        desc: "for: inicialização, condição e atualização em um cabeçalho compacto. for...in itera sobre chaves enumeráveis de objetos. for...of (ES6) itera sobre valores de iteráveis (arrays, strings, Map, Set etc.).",
      },
      {
        name: "break, continue e labels",
        desc: "break encerra o laço ou switch imediatamente. continue pula para a próxima iteração. Labels permitem break e continue em laços aninhados específicos.",
      },
      {
        name: "return, throw e try/catch/finally",
        desc: "return encerra uma função e retorna um valor. throw lança uma exceção. try/catch/finally trata erros: catch captura, finally sempre executa (limpeza de recursos).",
      },
      {
        name: "Instruções de declaração (var, let, const, function, class)",
        desc: "Declaram variáveis e funções. function declarations são içadas (hoisted) ao topo do escopo. class declarations não são içadas da mesma forma.",
      },
    ],
    codeExamples: [
      {
        caption: "instrucoes.js — Controle de fluxo",
        code: `<span class="cmt">// for...of com desestruturação</span>
<span class="kw">const</span> <span class="var">frutas</span> = [<span class="str">"maçã"</span>, <span class="str">"banana"</span>, <span class="str">"laranja"</span>];
<span class="kw">for</span> (<span class="kw">const</span> <span class="var">fruta</span> <span class="kw">of</span> <span class="var">frutas</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="var">fruta</span>);
}

<span class="cmt">// try/catch/finally</span>
<span class="kw">try</span> {
  <span class="kw">const</span> <span class="var">dado</span> = <span class="fn">JSON</span>.<span class="fn">parse</span>(<span class="str">"texto inválido"</span>);
} <span class="kw">catch</span> (<span class="var">e</span>) {
  <span class="fn">console</span>.<span class="fn">error</span>(<span class="str">"Erro:"</span>, <span class="var">e</span>.<span class="var">message</span>);
} <span class="kw">finally</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Limpeza concluída."</span>);
}`,
      },
    ],
  },

  {
    num: 6,
    title: "Objetos",
    summary:
      "Mergulho profundo no tipo mais fundamental de JavaScript: o objeto. Cobre criação, acesso a propriedades, enumeração, extensão de protótipos e as novidades do ES6+ como shorthand, computed properties e desestruturação.",
    topics: [
      {
        name: "Criação de objetos",
        desc: "Três formas: literal de objeto {chave: valor}, construtor (new Object()), e Object.create(proto) para controle explícito do protótipo.",
      },
      {
        name: "Acesso e modificação de propriedades",
        desc: "Notação de ponto (obj.prop) e notação de colchetes (obj['prop']). Propriedades podem ser adicionadas, modificadas ou deletadas dinamicamente.",
      },
      {
        name: "Herança prototípica",
        desc: "Cada objeto tem um protótipo interno ([[Prototype]]). Quando uma propriedade não é encontrada no objeto, a busca sobe pela cadeia de protótipos até Object.prototype.",
      },
      {
        name: "Atributos de propriedade (descritores)",
        desc: "Propriedades têm atributos: value, writable, enumerable e configurable. Gerenciados com Object.defineProperty() e Object.getOwnPropertyDescriptor().",
      },
      {
        name: "Getters e Setters (propriedades de acesso)",
        desc: "Permitem definir lógica de obtenção e definição de valores com get e set. Parecem propriedades comuns para quem usa o objeto.",
      },
      {
        name: "Métodos Object.* essenciais",
        desc: "Object.keys(), .values(), .entries() — enumeração. Object.assign() — cópia rasa. Object.freeze(), .seal() — imutabilidade. Object.is() — igualdade estrita sem coerção.",
      },
      {
        name: "Sintaxe de objeto ES6+",
        desc: "Shorthand ({x} em vez de {x:x}), computed property names ([expr]: val), spread em objetos ({...obj}), e desestruturação de objetos (const {a, b} = obj).",
      },
      {
        name: "Serialização de objetos",
        desc: "JSON.stringify() converte objetos em JSON. JSON.parse() reverte o processo. Propriedades undefined, funções e symbols são omitidas.",
      },
    ],
    codeExamples: [
      {
        caption: "objetos.js — Criação e manipulação",
        code: `<span class="cmt">// Literal com shorthand e computed</span>
<span class="kw">const</span> <span class="var">chave</span> = <span class="str">"cor"</span>;
<span class="kw">const</span> <span class="var">r</span> = <span class="num">255</span>, <span class="var">g</span> = <span class="num">128</span>, <span class="var">b</span> = <span class="num">0</span>;
<span class="kw">const</span> <span class="var">pixel</span> = { <span class="var">r</span>, <span class="var">g</span>, <span class="var">b</span>, [<span class="var">chave</span>]: <span class="str">"laranja"</span> };

<span class="cmt">// Getter / Setter</span>
<span class="kw">const</span> <span class="var">circulo</span> = {
  <span class="var">_raio</span>: <span class="num">5</span>,
  <span class="kw">get</span> <span class="fn">raio</span>()  { <span class="kw">return</span> <span class="kw">this</span>.<span class="var">_raio</span>; },
  <span class="kw">set</span> <span class="fn">raio</span>(<span class="var">v</span>) { <span class="kw">if</span> (<span class="var">v</span> > <span class="num">0</span>) <span class="kw">this</span>.<span class="var">_raio</span> = <span class="var">v</span>; },
  <span class="kw">get</span> <span class="fn">area</span>()  { <span class="kw">return</span> Math.<span class="fn">PI</span> * <span class="kw">this</span>.<span class="var">_raio</span> ** <span class="num">2</span>; }
};`,
      },
    ],
  },

  {
    num: 7,
    title: "Arrays",
    summary:
      "Cobertura completa da estrutura de dados mais usada em JavaScript: o array. Criação, indexação, iteração, métodos de transformação (map, filter, reduce) e os recursos ES6+ como desestruturação e array spread.",
    topics: [
      {
        name: "Criação de arrays",
        desc: "Literal ([1,2,3]), construtor (new Array(n)), Array.from() para converter iteráveis e Array.of() para criar de argumentos individuais.",
      },
      {
        name: "Acesso, modificação e length",
        desc: "Acesso por índice (arr[0]). length é sempre um a mais que o maior índice. Arrays são objetos com índices numéricos como chaves.",
      },
      {
        name: "Adição e remoção de elementos",
        desc: "push/pop (fim do array), shift/unshift (início), splice() (qualquer posição), slice() (extração sem mutação), concat() (junção).",
      },
      {
        name: "Iteração de arrays",
        desc: "forEach(), for...of, for clássico. indexOf(), includes(), findIndex(), find() para busca. every(), some() para verificação de condições.",
      },
      {
        name: "Transformação: map, filter, reduce",
        desc: "map(): transforma cada elemento. filter(): retorna subarray por predicado. reduce(): acumula em um único valor. São os pilares da programação funcional com arrays.",
      },
      {
        name: "Ordenação: sort e reverse",
        desc: "sort() ordena no lugar usando comparação string por padrão; usa função comparadora para ordenação numérica: arr.sort((a,b) => a-b). reverse() inverte no lugar.",
      },
      {
        name: "Array ES6+: spread, desestruturação e flat",
        desc: "Spread (...arr) expande arrays. Desestruturação (const [a, b, ...resto] = arr). flat() e flatMap() para arrays aninhados. fill() e copyWithin() para preenchimento.",
      },
      {
        name: "Arrays tipados (Typed Arrays)",
        desc: "Int8Array, Uint8Array, Float32Array etc. Armazenam dados binários de tipo fixo em ArrayBuffer. Usados em WebGL, processamento de áudio e comunicação binária.",
      },
    ],
    codeExamples: [
      {
        caption: "arrays.js — map, filter e reduce",
        code: `<span class="kw">const</span> <span class="var">nums</span> = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>];

<span class="cmt">// map — transforma cada elemento</span>
<span class="kw">const</span> <span class="var">dobro</span>  = <span class="var">nums</span>.<span class="fn">map</span>(<span class="var">n</span> => <span class="var">n</span> * <span class="num">2</span>);

<span class="cmt">// filter — filtra por condição</span>
<span class="kw">const</span> <span class="var">pares</span>  = <span class="var">nums</span>.<span class="fn">filter</span>(<span class="var">n</span> => <span class="var">n</span> % <span class="num">2</span> === <span class="num">0</span>);

<span class="cmt">// reduce — acumula em um valor</span>
<span class="kw">const</span> <span class="var">soma</span>   = <span class="var">nums</span>.<span class="fn">reduce</span>((<span class="var">acc</span>, <span class="var">n</span>) => <span class="var">acc</span> + <span class="var">n</span>, <span class="num">0</span>);

<span class="cmt">// Desestruturação</span>
<span class="kw">const</span> [<span class="var">primeiro</span>, <span class="var">segundo</span>, ...<span class="var">resto</span>] = <span class="var">nums</span>;`,
      },
    ],
  },

  {
    num: 8,
    title: "Funções",
    summary:
      "Estudo aprofundado das funções em JavaScript: declaração vs. expressão, arrow functions, closures, parâmetros avançados, IIFE, recursão e o entendimento de funções como valores de primeira classe.",
    topics: [
      {
        name: "Declaração e expressão de função",
        desc: "Declarations (function foo(){}) são içadas. Expressions (const foo = function(){}) não são içadas — a variável é içada mas não sua inicialização.",
      },
      {
        name: "Arrow functions (ES6)",
        desc: "Sintaxe concisa: param => expr ou (p1,p2) => { corpo }. Não possuem seu próprio this, arguments, super ou new.target — herdados do escopo envolvente.",
      },
      {
        name: "Parâmetros padrão, rest e desestruturação",
        desc: "Padrão: function f(x = 0){}. Rest: function f(...args){} coleta argumentos extras em array. Desestruturação como parâmetro: function f({nome, idade}){}.",
      },
      {
        name: "Closures",
        desc: "Uma função captura o ambiente léxico onde foi criada. Permite criar variáveis privadas, módulos e fábricas de funções. Conceito fundamental em JS.",
      },
      {
        name: "this e context binding",
        desc: "O valor de this depende de como a função é chamada. call(), apply() e bind() permitem definir this explicitamente. Arrow functions herdam this do escopo externo.",
      },
      {
        name: "Funções como valores (higher-order functions)",
        desc: "Funções podem ser passadas como argumentos, retornadas de outras funções e armazenadas em variáveis. Habilitam map, filter, reduce e padrões funcionais.",
      },
      {
        name: "IIFE — Immediately Invoked Function Expression",
        desc: "Padrão (function(){ ... })() que cria um escopo privado imediato. Usado antes do ES6 para evitar poluição do escopo global. Ainda relevante em certos contextos.",
      },
      {
        name: "Recursão e pilha de chamadas (call stack)",
        desc: "Uma função que chama a si mesma. Requer caso base para evitar stack overflow. Útil para estruturas de dados hierárquicas (árvores, listas encadeadas).",
      },
      {
        name: "Funções geradoras (generators — ES6)",
        desc: "Declaradas com function*. Usam yield para pausar a execução e retornar um valor. Retornam um iterador. Úteis para sequências preguiçosas e corrotinas.",
      },
    ],
    codeExamples: [
      {
        caption: "funcoes.js — Closures e arrow functions",
        code: `<span class="cmt">// Closure — contador privado</span>
<span class="kw">function</span> <span class="fn">criarContador</span>() {
  <span class="kw">let</span> <span class="var">count</span> = <span class="num">0</span>;
  <span class="kw">return</span> {
    <span class="fn">incrementar</span>: () => ++<span class="var">count</span>,
    <span class="fn">valor</span>:       () => <span class="var">count</span>,
  };
}
<span class="kw">const</span> <span class="var">c</span> = <span class="fn">criarContador</span>();
<span class="var">c</span>.<span class="fn">incrementar</span>();  <span class="cmt">// count = 1</span>

<span class="cmt">// Gerador</span>
<span class="kw">function*</span> <span class="fn">fibonacci</span>() {
  <span class="kw">let</span> [<span class="var">a</span>, <span class="var">b</span>] = [<span class="num">0</span>, <span class="num">1</span>];
  <span class="kw">while</span> (<span class="kw">true</span>) { <span class="kw">yield</span> <span class="var">a</span>; [<span class="var">a</span>, <span class="var">b</span>] = [<span class="var">b</span>, <span class="var">a</span> + <span class="var">b</span>]; }
}`,
      },
    ],
  },

  {
    num: 9,
    title: "Classes",
    summary:
      "Apresenta o sistema de classes do ES6, que fornece uma sintaxe mais clara sobre a herança prototípica. Cobre construtores, métodos de instância e estáticos, herança com extends, campos privados e o papel do operador new.",
    topics: [
      {
        name: "Declaração de classe",
        desc: "Sintaxe class NomeClasse { constructor() {} }. Açúcar sintático sobre funções construtoras e protótipos. Classes não são içadas da mesma forma que funções.",
      },
      {
        name: "Construtor e new",
        desc: "O constructor é chamado quando new é usado. Cria o objeto, define this e retorna automaticamente. new F() cria uma instância com F.prototype como protótipo.",
      },
      {
        name: "Métodos de instância e propriedades",
        desc: "Métodos definidos no corpo da classe são adicionados ao protótipo, compartilhados por todas as instâncias. Propriedades de instância são definidas em constructor ou como class fields.",
      },
      {
        name: "Membros estáticos (static)",
        desc: "Métodos e propriedades com static pertencem à classe, não às instâncias. Acessados via NomeClasse.metodo(), úteis para factories e utilitários.",
      },
      {
        name: "Herança com extends e super",
        desc: "class Filho extends Pai. O construtor filho deve chamar super() antes de usar this. super.metodo() acessa o método do pai. Simula herança clássica.",
      },
      {
        name: "Campos privados (#campo)",
        desc: "ES2022: campos e métodos com # são genuinamente privados. Só acessíveis dentro do corpo da classe. Verificados pelo motor JS, ao contrário da convenção _privado.",
      },
      {
        name: "Getters e setters em classes",
        desc: "get e set dentro de classes funcionam como propriedades computadas com lógica. Acessados por nome como propriedade, não como chamada de método.",
      },
    ],
    codeExamples: [
      {
        caption: "classes.js — Herança e campos privados",
        code: `<span class="kw">class</span> <span class="fn">Animal</span> {
  <span class="var">#nome</span>;  <span class="cmt">// campo privado (ES2022)</span>
  <span class="fn">constructor</span>(<span class="var">nome</span>) { <span class="kw">this</span>.<span class="var">#nome</span> = <span class="var">nome</span>; }
  <span class="fn">falar</span>() { <span class="kw">return</span> <span class="str">\`\${<span class="kw">this</span>.<span class="var">#nome</span>} faz um som.\`</span>; }
}

<span class="kw">class</span> <span class="fn">Cachorro</span> <span class="kw">extends</span> <span class="fn">Animal</span> {
  <span class="fn">falar</span>() { <span class="kw">return</span> <span class="kw">super</span>.<span class="fn">falar</span>().<span class="fn">replace</span>(<span class="str">"um som"</span>, <span class="str">"au au"</span>); }
}

<span class="kw">const</span> <span class="var">dog</span> = <span class="kw">new</span> <span class="fn">Cachorro</span>(<span class="str">"Rex"</span>);
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">dog</span>.<span class="fn">falar</span>());  <span class="cmt">// Rex faz au au.</span>`,
      },
    ],
  },

  {
    num: 10,
    title: "Módulos",
    summary:
      "Explora o sistema de módulos ES6 (ESM) com import e export, comparando-o ao CommonJS (require/module.exports) do Node.js. Módulos organizam código em arquivos reutilizáveis com escopo próprio.",
    topics: [
      {
        name: "Por que módulos?",
        desc: "Evitam poluição do escopo global, facilitam reutilização, permitem encapsulamento e tornam dependências explícitas. Cada arquivo de módulo tem seu próprio escopo.",
      },
      {
        name: "export e export default",
        desc: "export nomeia exportações de um módulo. export default define a exportação principal. Um módulo pode ter múltiplos exports nomeados e no máximo um default.",
      },
      {
        name: "import e importação nomeada",
        desc: "import { funcao, valor } from './modulo.js'. import defaultExport from './modulo.js'. import * as ns from './modulo.js' importa tudo como namespace.",
      },
      {
        name: "Importação dinâmica (import())",
        desc: "import('./modulo.js') retorna uma Promise. Permite carregamento tardio (lazy loading) de módulos sob demanda, melhorando performance inicial.",
      },
      {
        name: "CommonJS vs. ESM",
        desc: "CommonJS (require/module.exports): síncrono, tradicional no Node.js. ESM (import/export): assíncrono, estático, tree-shakeable. Node.js suporta ambos com .cjs e .mjs.",
      },
      {
        name: "Reexportação",
        desc: "export { nome } from './outro.js' permite que um módulo agregador reexporte de outros, criando APIs públicas limpas sem importar e reexportar manualmente.",
      },
    ],
    codeExamples: [
      {
        caption: "modulos.js — ESM básico",
        code: `<span class="cmt">// math.js — exportações nomeadas</span>
<span class="kw">export const</span> <span class="fn">PI</span> = <span class="num">3.14159</span>;
<span class="kw">export function</span> <span class="fn">somar</span>(<span class="var">a</span>, <span class="var">b</span>) { <span class="kw">return</span> <span class="var">a</span> + <span class="var">b</span>; }
<span class="kw">export default function</span> <span class="fn">multiplicar</span>(<span class="var">a</span>, <span class="var">b</span>) { <span class="kw">return</span> <span class="var">a</span> * <span class="var">b</span>; }

<span class="cmt">// app.js — importação</span>
<span class="kw">import</span> <span class="fn">multiplicar</span>, { <span class="fn">PI</span>, <span class="fn">somar</span> } <span class="kw">from</span> <span class="str">"./math.js"</span>;

<span class="cmt">// Importação dinâmica</span>
<span class="kw">const</span> { <span class="var">somar</span>: <span class="var">add</span> } = <span class="kw">await</span> <span class="fn">import</span>(<span class="str">"./math.js"</span>);`,
      },
    ],
  },

  {
    num: 11,
    title: "A biblioteca padrão do JavaScript",
    summary:
      "Examina os objetos e funções embutidos que compõem a biblioteca padrão da linguagem: Math, Date, RegExp, Error, JSON, Map, Set, WeakMap, WeakSet e as APIs de internacionalização. Não confundir com APIs do navegador (DOM) ou do Node.js.",
    topics: [
      {
        name: "O objeto Math",
        desc: "Contém constantes (Math.PI, Math.E) e funções matemáticas: Math.abs(), .round(), .floor(), .ceil(), .sqrt(), .pow(), .max(), .min(), .random().",
      },
      {
        name: "Datas e o objeto Date",
        desc: "new Date() cria a data atual. Métodos como .getFullYear(), .getMonth(), .getTime() (timestamp ms). Cuidado: meses são 0-indexados. Considere bibliotecas como date-fns para produção.",
      },
      {
        name: "Expressões Regulares (RegExp)",
        desc: "Padrões para correspondência de strings: /padrão/flags. Métodos: test(), exec() (RegExp), match(), replace(), split(), search() (String). Flags: i (insensível), g (global), m (multilinha).",
      },
      {
        name: "Map e Set",
        desc: "Map: coleção de pares chave-valor com chaves de qualquer tipo. Set: coleção de valores únicos. Ambos iteram em ordem de inserção e têm melhor performance que objetos para muitas operações.",
      },
      {
        name: "WeakMap e WeakSet",
        desc: "Versões 'fracas' de Map e Set onde as chaves (WeakMap) ou valores (WeakSet) são referências fracas — não impedem a coleta de lixo. Não são iteráveis.",
      },
      {
        name: "Error e tipos de erro",
        desc: "Hierarquia de erros: Error (base), TypeError, RangeError, ReferenceError, SyntaxError, URIError. Propriedades: name, message, stack. Pode-se criar classes de erro personalizadas.",
      },
      {
        name: "JSON",
        desc: "JSON.stringify(valor, replacer, espaços) e JSON.parse(texto, reviver). Formato de troca de dados textual baseado em JavaScript. Não suporta undefined, funções, RegExp ou símbolos.",
      },
      {
        name: "Internacionalização (Intl)",
        desc: "API Intl para formatação de datas, números e strings sensíveis ao locale: Intl.DateTimeFormat, Intl.NumberFormat, Intl.Collator, Intl.RelativeTimeFormat.",
      },
    ],
    codeExamples: [
      {
        caption: "stdlib.js — Map, Set e RegExp",
        code: `<span class="cmt">// Map — chaves de qualquer tipo</span>
<span class="kw">const</span> <span class="var">mapa</span> = <span class="kw">new</span> <span class="fn">Map</span>();
<span class="var">mapa</span>.<span class="fn">set</span>(<span class="str">"chave"</span>, <span class="num">42</span>);
<span class="var">mapa</span>.<span class="fn">set</span>({ <span class="var">id</span>: <span class="num">1</span> }, <span class="str">"objeto como chave"</span>);

<span class="cmt">// Set — valores únicos</span>
<span class="kw">const</span> <span class="var">unico</span> = <span class="kw">new</span> <span class="fn">Set</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">2</span>, <span class="num">3</span>]);  <span class="cmt">// {1,2,3}</span>

<span class="cmt">// RegExp</span>
<span class="kw">const</span> <span class="var">email</span> = <span class="str">/^[\w.-]+@[\w-]+\.\w{2,}$/i</span>;
<span class="fn">console</span>.<span class="fn">log</span>(<span class="var">email</span>.<span class="fn">test</span>(<span class="str">"user@exemplo.com"</span>)); <span class="cmt">// true</span>

<span class="cmt">// Intl — formatação localizada</span>
<span class="kw">new</span> <span class="fn">Intl</span>.<span class="fn">NumberFormat</span>(<span class="str">"pt-BR"</span>, { <span class="var">style</span>: <span class="str">"currency"</span>, <span class="var">currency</span>: <span class="str">"BRL"</span> })
  .<span class="fn">format</span>(<span class="num">1234.56</span>);  <span class="cmt">// "R$ 1.234,56"</span>`,
      },
    ],
  },

  {
    num: 12,
    title: "Iteradores e geradores",
    summary:
      "Explica o protocolo de iteração de JavaScript (Iterable e Iterator), os geradores (function*) como forma de criar iteradores customizados, e os iteradores assíncronos (for await...of) para processar streams de dados.",
    topics: [
      {
        name: "O protocolo de iteração",
        desc: "Um objeto é iterável se implementa o método [Symbol.iterator]() que retorna um iterador. Um iterador tem o método next() que retorna { value, done }.",
      },
      {
        name: "Iteráveis embutidos",
        desc: "Arrays, strings, Map, Set, arguments e NodeList são iteráveis nativos. Funcionam com for...of, spread (...), desestruturação e Array.from().",
      },
      {
        name: "Iteradores personalizados",
        desc: "Qualquer objeto pode se tornar iterável implementando [Symbol.iterator](). Permite que objetos customizados funcionem com todos os recursos de iteração da linguagem.",
      },
      {
        name: "Funções geradoras (function*)",
        desc: "function* cria um gerador. Cada yield suspende a execução e retorna um valor. O chamador pode usar next() ou for...of. São iteradores peregrinhos (lazy).",
      },
      {
        name: "yield e yield* (delegação)",
        desc: "yield pausa e retorna. yield* delega para outro iterável ou gerador. Essencial para compor geradores e criar pipelines de transformação de dados.",
      },
      {
        name: "Iteradores assíncronos e for await...of",
        desc: "Quando dados chegam de forma assíncrona (streams de rede, leitura de arquivo), iteradores assíncronos com Symbol.asyncIterator e for await...of processam cada item quando disponível.",
      },
      {
        name: "Geradores como corrotinas",
        desc: "Geradores podem receber valores via next(valor), permitindo comunicação bidirecional. Usados como base para implementações assíncronas (como async/await antes do ES2017).",
      },
    ],
    codeExamples: [
      {
        caption: "iteradores.js — Gerador personalizado",
        code: `<span class="cmt">// Iterável personalizado: intervalo de números</span>
<span class="kw">function*</span> <span class="fn">intervalo</span>(<span class="var">inicio</span>, <span class="var">fim</span>, <span class="var">passo</span> = <span class="num">1</span>) {
  <span class="kw">for</span> (<span class="kw">let</span> <span class="var">i</span> = <span class="var">inicio</span>; <span class="var">i</span> <= <span class="var">fim</span>; <span class="var">i</span> += <span class="var">passo</span>) {
    <span class="kw">yield</span> <span class="var">i</span>;
  }
}

<span class="kw">for</span> (<span class="kw">const</span> <span class="var">n</span> <span class="kw">of</span> <span class="fn">intervalo</span>(<span class="num">1</span>, <span class="num">10</span>, <span class="num">2</span>)) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="var">n</span>);  <span class="cmt">// 1, 3, 5, 7, 9</span>
}

<span class="cmt">// Spread de gerador</span>
<span class="kw">const</span> <span class="var">dezPrimeiros</span> = [...<span class="fn">intervalo</span>(<span class="num">1</span>, <span class="num">10</span>)];`,
      },
    ],
  },
];

/* ─── ESTADO DA APLICAÇÃO ────────────────────────────────── */
const state = {
  openChapter: null,
  readChapters: new Set(JSON.parse(localStorage.getItem("js-guide-read") || "[]")),
};

function saveState() {
  localStorage.setItem("js-guide-read", JSON.stringify([...state.readChapters]));
}

/* ─── UTILITÁRIOS ────────────────────────────────────────── */
function updateProgressUI() {
  const total = CHAPTERS.length;
  const done = state.readChapters.size;
  const pct = Math.round((done / total) * 100);

  const fill = document.getElementById("global-progress-fill");
  const text = document.getElementById("global-progress-text");
  const label = document.getElementById("progress-label");
  const wrapper = document.getElementById("global-progressbar-wrapper");

  if (fill) fill.style.width = pct + "%";
  if (text) text.textContent = pct + "% concluído";
  if (label) label.textContent = `${done} de ${total} capítulos lidos`;
  if (wrapper) wrapper.setAttribute("aria-valuenow", done);
}

function scrollToChapter(num) {
  const card = document.getElementById(`chapter-${num}`);
  if (card) {
    const offset = 72; // height of sticky progress bar
    const top = card.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/* ─── RENDERIZAÇÃO DOS CHIPS DE NAVEGAÇÃO ────────────────── */
function renderTocChips() {
  const container = document.getElementById("toc-chips");
  if (!container) return;
  container.innerHTML = "";
  CHAPTERS.forEach((ch) => {
    const chip = document.createElement("button");
    chip.className = "toc-chip" + (state.readChapters.has(ch.num) ? " is-read" : "");
    chip.textContent = ch.num;
    chip.title = `Capítulo ${ch.num}: ${ch.title}`;
    chip.id = `toc-chip-${ch.num}`;
    chip.setAttribute("aria-label", `Ir para o capítulo ${ch.num}: ${ch.title}`);
    chip.addEventListener("click", () => {
      scrollToChapter(ch.num);
      toggleChapter(ch.num, true);
    });
    container.appendChild(chip);
  });
}

function updateChip(num) {
  const chip = document.getElementById(`toc-chip-${num}`);
  if (!chip) return;
  chip.classList.toggle("is-read", state.readChapters.has(num));
}

/* ─── RENDERIZAÇÃO DOS CAPÍTULOS ─────────────────────────── */
function buildTopicsHTML(topics) {
  return `
    <div class="topics-section-title">Tópicos essenciais</div>
    <div class="topics-list">
      ${topics
        .map(
          (t) => `
        <div class="topic-item">
          <div class="topic-bullet"><div class="topic-bullet-dot"></div></div>
          <div class="topic-content">
            <div class="topic-name">${t.name}</div>
            <div class="topic-desc">${t.desc}</div>
          </div>
        </div>`
        )
        .join("")}
    </div>`;
}

function buildCodeExamplesHTML(examples) {
  if (!examples || examples.length === 0) return "";
  return `
    <div class="code-examples-title">Exemplos de código</div>
    ${examples
      .map(
        (ex) => `
      <div class="code-block-wrapper">
        <div class="code-block-caption">${ex.caption}</div>
        <pre class="code-block">${ex.code}</pre>
      </div>`
      )
      .join("")}`;
}

function buildChapterCardHTML(ch) {
  const isRead = state.readChapters.has(ch.num);
  const readClass = isRead ? " is-read" : "";
  const readBtnClass = isRead ? " is-marked" : "";
  const readBtnText = isRead ? "✓ Marcado como lido" : "Marcar como lido";

  return `
    <div
      class="chapter-card${readClass}"
      id="chapter-${ch.num}"
      role="listitem"
      data-chapter="${ch.num}"
    >
      <div
        class="chapter-header"
        id="chapter-header-${ch.num}"
        role="button"
        tabindex="0"
        aria-expanded="false"
        aria-controls="chapter-body-${ch.num}"
        onclick="toggleChapter(${ch.num})"
        onkeydown="handleHeaderKeydown(event, ${ch.num})"
      >
        <div class="chapter-number-badge">
          <span class="chapter-num">${ch.num}</span>
        </div>
        <div class="chapter-header-text">
          <div class="chapter-label">Capítulo ${ch.num}</div>
          <div class="chapter-title">${ch.title}</div>
          <div class="chapter-meta-inline">
            <span class="chapter-topics-count">${ch.topics.length} tópicos</span>
            <span class="chapter-read-badge" id="read-badge-${ch.num}">Lido ✓</span>
          </div>
        </div>
        <div class="chapter-toggle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      <div class="chapter-body" id="chapter-body-${ch.num}" role="region" aria-labelledby="chapter-header-${ch.num}">
        <div class="chapter-body-inner">
          <div class="chapter-body-content">
            <p class="chapter-summary">${ch.summary}</p>
            ${buildTopicsHTML(ch.topics)}
            ${buildCodeExamplesHTML(ch.codeExamples)}
            <div class="chapter-actions">
              <button
                class="btn-mark-read${readBtnClass}"
                id="btn-read-${ch.num}"
                onclick="toggleRead(${ch.num})"
                aria-label="${readBtnText} para o capítulo ${ch.num}"
              >${readBtnText}</button>
              <button
                class="btn-close"
                onclick="toggleChapter(${ch.num})"
                aria-label="Fechar capítulo ${ch.num}"
              >Fechar ↑</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderChapters() {
  const list = document.getElementById("chapters-list");
  if (!list) return;
  list.innerHTML = CHAPTERS.map(buildChapterCardHTML).join("");
}

/* ─── INTERAÇÃO: ABRIR / FECHAR CAPÍTULOS ─────────────────── */
function toggleChapter(num, forceOpen = false) {
  const card = document.getElementById(`chapter-${num}`);
  const header = document.getElementById(`chapter-header-${num}`);
  const isCurrentlyOpen = card.classList.contains("is-open");

  // Fechar o capítulo aberto anteriormente
  if (state.openChapter && state.openChapter !== num) {
    const prevCard = document.getElementById(`chapter-${state.openChapter}`);
    const prevHeader = document.getElementById(`chapter-header-${state.openChapter}`);
    if (prevCard) prevCard.classList.remove("is-open");
    if (prevHeader) prevHeader.setAttribute("aria-expanded", "false");
  }

  const shouldOpen = forceOpen || !isCurrentlyOpen;

  if (shouldOpen) {
    card.classList.add("is-open");
    header.setAttribute("aria-expanded", "true");
    state.openChapter = num;
  } else {
    card.classList.remove("is-open");
    header.setAttribute("aria-expanded", "false");
    state.openChapter = null;
  }
}

function handleHeaderKeydown(event, num) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleChapter(num);
  }
}

/* ─── INTERAÇÃO: MARCAR COMO LIDO ───────────────────────────── */
function toggleRead(num) {
  const card = document.getElementById(`chapter-${num}`);
  const btn = document.getElementById(`btn-read-${num}`);
  const badge = document.getElementById(`read-badge-${num}`);

  if (state.readChapters.has(num)) {
    state.readChapters.delete(num);
    card.classList.remove("is-read");
    if (btn) { btn.classList.remove("is-marked"); btn.textContent = "Marcar como lido"; }
  } else {
    state.readChapters.add(num);
    card.classList.add("is-read");
    if (btn) { btn.classList.add("is-marked"); btn.textContent = "✓ Marcado como lido"; }

    // Pequena animação de confete no botão
    if (btn) {
      btn.style.transform = "scale(1.08)";
      setTimeout(() => { btn.style.transform = ""; }, 250);
    }
  }

  updateChip(num);
  updateProgressUI();
  saveState();
}

/* ─── INICIALIZAÇÃO ──────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderChapters();
  renderTocChips();
  updateProgressUI();

  // Restaurar estado de leitura nos cards renderizados
  state.readChapters.forEach((num) => {
    const card = document.getElementById(`chapter-${num}`);
    const btn = document.getElementById(`btn-read-${num}`);
    if (card) card.classList.add("is-read");
    if (btn) { btn.classList.add("is-marked"); btn.textContent = "✓ Marcado como lido"; }
  });
});
