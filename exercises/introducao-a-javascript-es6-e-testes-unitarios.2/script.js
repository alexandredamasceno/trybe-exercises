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


  
  