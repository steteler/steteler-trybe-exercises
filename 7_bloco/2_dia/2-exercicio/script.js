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

/*
const customerInfo = order => {
  return `  Olá ${order.order.delivery['deliveryPerson']}!
  Entrego para: ${order['name']}
  Telefone: ${order['phoneNumber']}
  R. ${order.address['street']}
  Nº: ${order.address['number']}`
}

console.log(customerInfo(order));
*/

const orderModifier = (order) => {
  const newBuyer = order['name'] = 'Luiz Silva';
  const pizzaFlavor = Object.keys(order.order.pizza);

  return `  Olá ${newBuyer}
  O total do seu pedido de ${pizzaFlavor} e ${order.order.drinks.coke.type}
  É de: R$ ${order.payment.total},00`
}

console.log(orderModifier(order));