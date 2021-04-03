console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function biggestName(names) {
  let biggest='';
  for (let attributes in names) {
    if (names[attributes].length > biggest.length) {
      biggest = names[attributes];
    }
  }
  return biggest;
}