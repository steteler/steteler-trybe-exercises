const numberInput: number = 7;

// exercicio 1
function isItAPrime (param: number): boolean {
  for (let i: number = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

// exercicio 2
const emailInput: string = 'email@email.com';

function validateEmailFormat(param: string): boolean {
  const re: RegExp = /\S+@\S+\.\S+/;

  return re.test(param);
};

console.log(validateEmailFormat(emailInput))

// exercicio 3
const numberList: number[] = [10, 5, 18, 2, 8, 23];

function sortInput (param: number[]): number[] {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

// exercicio 4
type People = {
  name: string,
  age: number,
}

const peopleInput: People = {
  name: 'Rui',
  age: 23,
};

function createSimpleSentence(param: People): string {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

// exercicio 5
const ageInput: number = 15;

function isOfLegalAge(param: string | boolean): boolean {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
