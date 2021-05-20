const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((accumulator, name) => 
  accumulator + name.split('').reduce((acumulator2, name2) => 
    (name2 === 'a' || name2 === 'A' ? acumulator2 + 1 : acumulator2), 0));

assert.deepStrictEqual(containsA(), 20);