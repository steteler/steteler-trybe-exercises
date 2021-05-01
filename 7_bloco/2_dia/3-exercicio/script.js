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

const addNewKeyValue = (objeto, key, keyValue) => {
  objeto[key] = keyValue;
}

addNewKeyValue(lesson2, 'turno', 'manhã');
console.table(lesson2)

const showObjectKeys = objeto => Object.keys(objeto);

console.log(showObjectKeys(lesson1));

const showObjectLength = objeto => Object.keys(objeto).length;

console.log(showObjectLength(lesson1));

const listObjectValues = objeto => Object.values(objeto);

console.log(listObjectValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.table(allLessons);

