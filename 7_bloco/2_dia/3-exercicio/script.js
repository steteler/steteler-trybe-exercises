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

//Parte 1
const addNewKeyValue = (objeto, key, keyValue) => {
  objeto[key] = keyValue;
}

addNewKeyValue(lesson2, 'turno', 'manhã');
console.table(lesson2)

//Parte 2
const showObjectKeys = objeto => Object.keys(objeto);

console.log(showObjectKeys(lesson1));

//Parte 3
const showObjectLength = objeto => Object.keys(objeto).length;

console.log(showObjectLength(lesson1));

//Parte 4
const listObjectValues = objeto => Object.values(objeto);

console.log(listObjectValues(lesson1));

//Parte 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.table(allLessons);

//Parte 6
const getNumberOfStudents = objeto => {
  let result = 0;
  let array = Object.keys(objeto);
  for (const index of array) {
    result += objeto[index].numeroEstudantes;
  }
  return result;
};

console.log(getNumberOfStudents(allLessons));

//Parte 7
const getValueByNumber = (objeto, index) => Object.values(objeto)[index];

console.log(getValueByNumber(lesson1, 0));
