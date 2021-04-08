const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
// A principio a forma que eu fiz foi buscar a média dos alunos primeiramente, como pode ver no código abaixo e depois eu joguei a variável com as médias na função(average: mediaNotas[indice]). Depois eu aprendi a forma como foi feita no gabarito que me poupou uma linha de código.
// let mediaNotas = grades.map(grade => grade.reduce((acc, curr) => acc + curr, 0)/ grade.length)
function studentAverage(array) {
  let novoArr = array.map((item, indice) => ({
    name: item,
    average: grades[indice].reduce((acc, curr) => acc + curr, 0)/ grades[indice].length
  }))
  return novoArr;
}
console.log(studentAverage(students))

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// assert.deepStrictEqual(studentAverage(), expected);