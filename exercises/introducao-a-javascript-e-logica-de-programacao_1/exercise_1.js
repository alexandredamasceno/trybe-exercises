console.log("Hello, World!")

let valorA = 10;
let valorB = 5;

console.log("- Adição")
console.log(valorA + valorB)
console.log("- Subtração")
console.log(valorA - valorB)
console.log("- Multiplicação")
console.log(valorA * valorB)
console.log("- Divisão")
console.log(valorA / valorB)
console.log("- Módulo")
console.log(((valorA + valorB) %2) == 0)

console.log("Segundo Requisito:")

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log("Maior número:")
    console.log(num1);
} else {
    console.log("Maior número:")
    console.log(num2);
}

console.log("Terceiro Requisito:")

let numero1 = 30;
let numero2 = 50;
let numero3 = 70;

if (numero1 > numero2 && numero1 > numero3) {
    console.log("Maior valor:")
    console.log(numero1)
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("Maior valor:")
    console.log(numero2)
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log("Maior valor:")
    console.log(numero3)
}

console.log("Quarto Requisito:")

let numero_1 = 100;

if (numero_1 >= 0) {
    console.log("positive")
} else {
    console.log("negative")
}

console.log("Quinto Requisito:")

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let somaAng = 180;

if (angulo1 + angulo2 + angulo3 == somaAng) {
    console.log(angulo1 + angulo2 + angulo3 == somaAng)
} else {
    console.log(angulo1 + angulo2 + angulo3 == somaAng)
}

console.log("Sexto Requisito:")

let peca = "Torre" .toLowerCase();

switch (peca) {
    case "rei":
        console.log("Anda uma casa por lance em todas as direções")
        break;
    case "torre":
        console.log("Movimentos paralelos (linhas ou colunas) quantas casas desejar desde que haja espaço livre.")
        break;
    case "rainha"||"damas":
        console.log("Movimentos paralelos (linhas ou colunas) e diagonais quantas casas desejar desde que haja espaço livre.")
        break;
    case "bispo":
        console.log("movimento é sempre em diagonal, obedecendo à cor de sua casa inicial.")
        break;
    case "cavalo":
        console.log("O cavalo anda em um formato que reproduz a letra L, ou seja, duas casas, na direção horizontal ou vertical, e mais uma, em angulo reto à direção anterior")
        break;
    case "peão":
        console.log("Movimento: uma casa desocupada à frente. Quando o peão está em sua casa inicial, pode mover-se uma ou duas casas adiante, somente no primeiro movimento de cada peão.")
        break;
    default: console.log("Erro: peça invalida! Tente novamente.")
}

//Aprendi a converter as palavras em minúsculas usando o .toLowerCase() no site:https://qastack.com.br/programming/154862/convert-javascript-string-to-be-all-lower-case

console.log("Sétimo Requisito:")

let nota = 100;

if (nota >= 90) {
    console.log("A");
} else if (nota >=80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >=50){
    console.log("E");
} else if (nota < 0 || nota > 100){
    console.log("Erro");
} else {
    console.log("F");
}

console.log("Oitavo Requisito")
console.log("Tem pelo menos um par?")


let num_1 = 10;
let num_2 = 15;
let num_3 = 5;

if ((num_1 || num_2 || num_3) %2 ==0) {
    console.log((num_1 || num_2 || num_3) %2 ==0)
} else {
    console.log((num_1 || num_2 || num_3) %2 ==0)
}

console.log("Nono Requisito:")
console.log("Tem pelo menos um ímpar?")

let numero_1 = 15;
let numero_2 = 10;
let numero_3 = 10;


if ((numero_1 || numero_2 || numero_3)%2 != 0) {
    console.log((numero_1 || numero_2 || numero_3)%2 != 0)
} else {
    console.log((numero_1 || numero_2 || numero_3)%2 != 0)
}

console.log("Décimo Requisito:")
//Custo inicial do produto = 10,00 + 20% imposto = 12,00. Ou seja, Ocorrerá uma redução de 12,00 por unidade vendida.

let custoProdutoMaisImposto = 12;
let valorDeVenda = 50;
let unidadesVendidas = 1000;
let valorCustoTotal = custoProdutoMaisImposto * unidadesVendidas;

if (custoProdutoMaisImposto <= valorDeVenda) {
    console.log("Lucro Total:")
    console.log((valorDeVenda * unidadesVendidas) - valorCustoTotal +",00");
} else {
    console.log("Erro")
}

console.log("Décimo Primeiro Requisito:")
console.log("Salário Líquido:")

let salarioBase = 3000;
// let aliquotaBaseInss;
// Eu cheguei a olhar o gabarito do Course para me situar, pois, tinha travado no início, mas depois eu fiz do meu próprio jeito, levando em conta o salário inicial(base) e o salário final (IR). As aliquotas eu adicionei dentros das estruturas condicionais. Obrigado, pela compreensão.

if (salarioBase <= 1556.94) {
    salarioBase = salarioBase - (salarioBase * 0.08);
} else if (salarioBase <= 2594.92) {
    salarioBase = salarioBase - (salarioBase * 0.09);
} else if (salarioBase <= 5189.82) {
    salarioBase = salarioBase - (salarioBase * 0.11);
} else  {
    salarioBase = salarioBase - 570.88;
}

let salarioBaseIr;

if (salarioBase <= 1903.98) {
    salarioBaseIr = salarioBase;
} else if (salarioBase <= 2826.65) {
    salarioBaseIr = salarioBase - ((salarioBase*0.075) - 142.80)
} else if (salarioBase <= 3751.05) {
    salarioBaseIr = salarioBase - ((salarioBase*0.15) - 354.80);
} else if (salarioBase <= 4664.68) {
    salarioBaseIr = salarioBase - ((salarioBase*0.225) - 636.13);
} else {
    salarioBaseIr = salarioBase ((salarioBase*0.275) - 869.36);
}

console.log(salarioBaseIr +",00");






