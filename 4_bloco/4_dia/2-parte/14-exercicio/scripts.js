function biggestName(names) {
  let biggest = '';
  for (const attributes in names) {
    if (names[attributes].length > biggest.length) {
      biggest = names[attributes];
    }
  }
  return biggest;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));