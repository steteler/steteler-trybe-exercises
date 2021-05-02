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
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Parte 1
const customerInfo = (order2) => `Olá ${order2.order.delivery.deliveryPerson}! Entrego para: ${order2.name} Telefone: ${order2.phoneNumber} R. ${order2.address.street} Nº: ${order2.address.number}`;

console.log(customerInfo(order));

// Parte 2
const orderModifier = (order2) => {
  let newBuyer = order2.name;
  newBuyer = 'Luiz Silva';
  const pizzaFlavor = Object.keys(order2.order.pizza);

  return `  Olá ${newBuyer}
  O total do seu pedido de ${pizzaFlavor} e ${order.order.drinks.coke.type}
  É de: R$ ${order.payment.total},00`;
};

console.log(orderModifier(order));