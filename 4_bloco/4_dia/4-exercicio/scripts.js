let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let index in carro) {
  console.log(index + ': ' +  carro[index]);
}