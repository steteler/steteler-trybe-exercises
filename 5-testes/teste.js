let arrayTeste = [
  {
    id: 45435,
    name: 'lions',
    popularity: 4,
    location: 'NE',
    availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
    residents: [
      {
        name: 'Zena',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Maxwell',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Faustino',
        sex: 'male',
        age: 7,
      },
      {
        name: 'Dee',
        sex: 'female',
        age: 14,
      },
    ],
  },
  {
    id: 23456,
    name: 'tigers',
    popularity: 5,
    location: 'NW',
    availability: ['Wednesday', 'Friday', 'Saturday', 'Tuesday'],
    residents: [
      {
        name: 'Shu',
        sex: 'female',
        age: 19,
      },
      {
        name: 'Esther',
        sex: 'female',
        age: 17,
      },
    ],
  },
]

console.log(
  arrayTeste.some((specie) => (
    specie.popularity === 5
  )
))

console.log(
  arrayTeste.filter((specie) => (
    specie.popularity === 5
  )
))