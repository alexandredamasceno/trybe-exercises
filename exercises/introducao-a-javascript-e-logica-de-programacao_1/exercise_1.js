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
