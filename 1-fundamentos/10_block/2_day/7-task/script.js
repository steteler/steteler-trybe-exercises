// Solução
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    const listAnimals = Animals.filter((animal) => animal.age === age);
    if (listAnimals.length !== 0) {
      return resolve(listAnimals);
    }
    const messageError = 'Nenhum animal encontrado!';
    return reject(messageError);
  })
);

const getAnimalByAge = (age) => (
  findAnimalByAge(age)
    .then((animal) => animal)
);

module.exports = getAnimalByAge;
