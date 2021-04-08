
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const lowerCase = array => {
    let arrayMin = [];
    for (let i =0; i < array.length; i +=1) {
        arrayMin.push(array[i].toLowerCase())
    }
    return arrayMin;
}
const verifica = array => {
    let vezes = 0;
    let arrayBlz = lowerCase(array);
    for (let i = 0; i < arrayBlz.length; i += 1) {
        let divide = arrayBlz[i].split('');
        for (let i = 0; i < divide.length; i +=1) {
            if (divide[i] === 'a') {
                vezes +=1;
            }
        }
    }
    return vezes;
}
console.log(verifica(names));

// Forma descrita no gabarito. Acima está a forma como eu fiz e abaixo a forma do gabarito. Abstraí a forma do gabarito, mas resolvi deixa também a forma como eu fiz.
function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') {
              return acumulator + 1;
            }
          return acumulator;
       }, 0), 0);
  }
console.log(containsA())
// assert.deepStrictEqual(containsA(), 20);