const readline = require('readline-sync')
const units6: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert6(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units6.indexOf(fromUnit);
  const toIndex = units6.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(units6, 'Escolha um número para a unidade base:');

  const toUnitChoiceIndex = readline.keyInSelect(units6, 'Escolha um número para a conversão:');

  const toUnitChoice = units6[toUnitChoiceIndex];
  const fromUnitChoice = units6[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert6(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();