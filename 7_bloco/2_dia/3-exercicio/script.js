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

const showObjectKeys = (objeto) => {
  return Object.keys(objeto);
}

addNewKeyValue(lesson2, 'turno', 'manhã');

console.table(lesson2)

console.log(showObjectKeys(lesson1));