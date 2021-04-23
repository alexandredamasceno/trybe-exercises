function getNumber() {
    const number = Math.floor(Math.random() * 100);
    return number;
}

function upperCase(string) {
    return string.toUpperCase()
}

function firstWord(string) {
    // substr retorna uma parte da string. Primeiro param é o início da string, e o segundo param é o último, pegando assim a extensão da string.
    return string.substr(0, 1);
}

// async function getAnimal() {
//     const animal = await fetch('https://dog.ceo/api/breeds/image/random')
//     animal.then(response => response.message).catch(error => error)
//     return animal;
// }
// console.log(getAnimal())

function concatString(string1, string2) {
    return string1.concat(string2);
}

module.exports = { getNumber, upperCase, firstWord, concatString }