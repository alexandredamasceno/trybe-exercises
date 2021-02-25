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


