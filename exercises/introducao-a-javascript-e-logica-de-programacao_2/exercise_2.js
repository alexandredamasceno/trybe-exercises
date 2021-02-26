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
