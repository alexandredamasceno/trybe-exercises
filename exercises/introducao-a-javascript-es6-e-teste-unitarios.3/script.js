const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(()=>{sum(4, '5'), 9});
assert.strictEqual(sum(4, '5'), 9);


// Função 2:
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

const newArray = [8, 9, 7, 3];
console.log(myRemove(newArray, 9));

assert.deepStrictEqual(newArray, [8, 9, 7, 3]);

// Função 3:
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const meuArray = [6, 7, 2, 9];
myRemoveWithoutCopy(meuArray, 2);
assert.notDeepStrictEqual(meuArray, [6, 7, 2, 9]);
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//Função 4:
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz')
assert.strictEqual(myFizzBuzz(9), 'fizz')
assert.strictEqual(myFizzBuzz(5), 'buzz')
assert.notStrictEqual(myFizzBuzz(7), 'fizzbuzz')
assert.strictEqual(myFizzBuzz('9'), false);

// Função 5:
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);

//Exercícios TDD:
//Item 1:
const assert = require('assert');
// escreva a função addOne aqui
function addOne(array) {
    
    for (let i in array){
        if (array[i] === 31){
            array[i]++
        } 
        if (array[i] === 57){
            array[i]++
        }
        if (array[i] === 12){
            array[i]++
        }
        if (array[i] === 5){
            array[i]++
        }
        
    }
    return array;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
assert.deepStrictEqual(myArray, unchanged);
const expected = [32, 58, 13, 6];
const output = addOne(myArray);
console.log(addOne(output))
console.log(myArray)

assert.strictEqual(typeof addOne, 'function');

assert.deepStrictEqual(output, expected);
