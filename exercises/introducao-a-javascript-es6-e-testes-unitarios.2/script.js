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