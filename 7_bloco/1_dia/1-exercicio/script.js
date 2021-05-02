const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    return `${ifScope} ótimo, fui utilizada no escopo !`;
  } else {
    return 'Não devo ser utilizada fora meu escopo (else)';
  }
}

console.log(testingScope(true));