const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const nome = order.name;
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const phone = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const apto = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${nome}, Telefone: ${phone}, R.${rua}, Nº: ${numero}, AP: ${apto}.`)
}

customerInfo(order);

const orderModifier = (order) => {
  const newPayer = order.name = 'Luiz Silva';
  const total = order.payment = 50;

  console.log(`Olá ${newPayer}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é ${total},00.`)
}

orderModifier(order);

//Parte II
//Item 1:
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function adicionaNewTurno(objeto, chave, valor) {
  objeto[chave] = valor;
}

adicionaNewTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

//Item 2:
function listaKeys(objeto) {
  const array = Object.keys(objeto);
  for (let i in array){
      console.log('-----------');
      console.log(array[i]);
  }
}
listaKeys(lesson1);

  //Item 3:
function sizeObj(objeto) {
  const obj = Object.keys(objeto).length;
  console.log(`Size = ${obj}`);
}
sizeObj(lesson1);

// Item 4:
function listaValues(objeto) {
    const valores = Object.values(objeto);
    for (let i in valores){
        console.log(`Valores = ${valores[i]}`);
    }
}
listaValues(lesson1);

//Item 5:
const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log(allLessons);
//Item 6:
function totalStudents() {
  const alunos1 = allLessons.lesson1.numeroEstudantes;
  const alunos2 = allLessons.lesson2.numeroEstudantes;
  const alunos3 = allLessons.lesson3.numeroEstudantes;
  
  console.log(alunos1);
  console.log(alunos2);
  console.log(alunos3); 
  
  const total = alunos1 + alunos2 + alunos3;
  console.log(total);
}
totalStudents();

function totalDeAlunos(objeto) {
  const allKeys = Object.keys(objeto);
  let total = 0;

  for (let i in allKeys){
    total += objeto[allKeys[i]].numeroEstudantes;
  }
  return total;
}
console.log(totalDeAlunos(allLessons));

//item 7: 

function mostraValor(objeto, indice) {
  const valorObjeto = Object.values(objeto);

  console.log(valorObjeto[indice]);
}

mostraValor(lesson1, 0);

//Item 8:

function validaChaveEValor(objeto, chave, valor) {
  const pares = Object.entries(objeto);
  let valido = false;

  for (let i in pares){
    if (pares[i][0] === chave && pares[i][1] === valor){
      valido = true;
    }
  }
  return valido;
}
console.log(validaChaveEValor(lesson3, 'turno', 'noite'));
console.log(validaChaveEValor(lesson3, 'materia', 'Maria Clara'))
  
  
//Apenas exercícios feitos em aula:

//Exercício aula parte I:
const myObject = {};

function criaObj (objeto, chave, valor) {
    objeto[chave] = valor;
}
criaObj(myObject, 'nome', 'Alexandre');

console.log(myObject);

//Exercício aula part II:
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
//Jeito 1:
function criaHabilidades(student) {
    const guardaKeys = Object.keys(student);
    const guardaValues = Object.values(student)
    for (let index = 0; index < guardaKeys.length; index += 1){
        console.log(`${guardaKeys[index]} => Nível: ${guardaValues[index]}`)
    }
}

console.log(criaHabilidades(student1));
console.log(criaHabilidades(student2));
//Jeito 2:
function valida (student) {
    const guardaChaves = Object.keys(student);
    const arrayLiteral = Object.values(student);
    let array = [];
    for (let i = 0; i < guardaChaves.length; i += 1){
        array.push( `${guardaChaves[i]}, Nível: ${arrayLiteral[i]}`);
    }
    return array;
}
console.log(valida(student1));
console.log(valida(student2));

//Exercício parte III
const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };

  const mostra = (student) => Object.values(student);

  console.log(mostra(student));

  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };

  const exemplo = Object.entries(países)
  for (let i = 0; i < exemplo.length; i += 1){
    console.log('-----------------');
    console.log(`País: ${exemplo[i][0]}`)
    console.log(`Capital: ${exemplo[i][1]}`);
  };


  const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone);
  console.log(person); 

  clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };

  const newPerson = Object.assign({}, person, lastName);

  newPerson.data = 23;
  console.log(newPerson);
  console.log(person);