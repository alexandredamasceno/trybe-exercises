let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
}

console.log("Segundo Requisito");
// No começo eu tentei resolver por meio de um laço for, porém, não deu muito certo. Ai fui pesquisar a respeito, até que encontrei um artigo nesse site: https://medium.com/@raullesteves/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380 e resolveu meu problema. Eu me atentei ao báscio, abstrai o necessário e o resultado é esse que você pode ver abaixo.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = numbers.reduce((acumulador, elementoatual) => acumulador +elementoatual);
console.log("Soma total= "+soma);

console.log("Terceiro Requisito");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = numbers.reduce((acumulador, elementoatual) => acumulador +elementoatual);


let mediaAritmetica = total / numbers.length;

console.log(mediaAritmetica);

console.log("Quarto requisito");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = numbers.reduce((acumulador, elementoatual) => acumulador +elementoatual);


let mediaAritmetica = total / numbers.length;

if (mediaAritmetica > 20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20");
}

console.log("Quinto Requisito");
// Essa eu travei na parte do if, então acabei olhando o gabarito. Abstrai o que estava no gabarito, aprendi o processo.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let cont = 0; cont < numbers.length; cont +=1){
    if (numbers[cont] > maior){
        maior = numbers[cont];
    }
}
console.log(maior)

console.log("Sexto Requisito");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for (let indice = 0; indice < numbers.length; indice +=1) {
    if (numbers[indice] %2 !=0){
        impares +=1;
    } else if (impares == 0){
        console.log("Nenhum valor ímpar econtrado")
    }
}
console.log(impares)


console.log("Sétimo Requisito");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 100;

for (let cont = 0; cont < numbers.length; cont +=1){
    if (numbers[cont] < menor){
        menor = numbers[cont];
    }
}
console.log(menor)


console.log("Oitavo Requisito:")

// Na minha primeira tentativa eu fiz de um jeito que no exercício seguinte me trouxe problemas, então olhei o gabarito e vi que não me dei conta do push. Mas tudo bem, eu entendi que o push "empurra", ou seja, adiciona valores a um determinado Array.

// let arrayResultado = [];

// for (let index_cont = 1; index_cont < 26; index_cont +=1){
//     arrayResultado = arrayResultado+ index_cont;
// }
// console.log(arrayResultado)

let arrayResultado = [];

for (let index_cont = 1; index_cont < 26; index_cont +=1){
    arrayResultado.push(index_cont);
}
console.log(arrayResultado)


console.log("Nono requisito:")


let arrayResultado = [];

for (let index_cont = 1; index_cont < 26; index_cont +=1){
    arrayResultado.push(index_cont);
}

for (let indexDiv = 0; indexDiv < arrayResultado.length; indexDiv +=1){
    console.log(arrayResultado[indexDiv] /2);
}


console.log("Bônus")

console.log("Terceira parte")

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i + 1]) {
    newArray.push(numbers[i] * numbers[i + 1]);
  } else {
    newArray.push(numbers[i] * 2);
  }
}

console.log(newArray);