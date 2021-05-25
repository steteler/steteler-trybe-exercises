const carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
};

for (const index of Object.entries(carro)) {
  console.log(`${index[0]}: ${index[1]}`);
}