const testingScope = (escopo) => {
  if (escopo) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    return `${ifScope} ótimo, fui utilizada no escopo !`;
  }
  return 'Não devo ser utilizada fora meu escopo (else)';
};

console.log(testingScope(true));