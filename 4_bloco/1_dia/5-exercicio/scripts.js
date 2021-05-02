// Parte 1

let a = 10;
let b = 2;
let c = 1;

console.log(`Adição: ${a + b}`);
console.log(`Subtração: ${a - b}`);
console.log(`Multiplicação: ${a * b}`);
console.log(`Divisão: ${a / b}`);
console.log(`Módulo: ${a % b}`);

// Parte 2
if (a > b) {
  console.log('\nO valor', a, 'é maior que o valor', b);
} else {
  console.log('\nO valor', b, 'é maior que o valor', a);
}

// Parte 3
a = 7;
b = 7;
c = 6;

const text = '\nO número maior é o';

if (a > b && a > c) {
  console.log(text, a);
} else if (b > a && b > c) {
  console.log(text, b);
} else if (c > a && c > b) {
  console.log(text, c);
} else {
  console.log('\nAmigão, tem 2 números iguais ai bicho, pode n');
}

// Parte 4
a = 0;

if (a > 0) {
  console.log('\nO valor é positivo');
} else if (a < 0) {
  console.log('\nO valor é negativo');
} else {
  console.log('\nO valor é 0');
}

// Parte 5
const degreeAngleA = 30;
const degreeAngleB = 60;
const degreeAngleC = 90;
const total = degreeAngleA + degreeAngleB + degreeAngleC;
const isPositive = (degreeAngleA > 0) && (degreeAngleB > 0) && (degreeAngleC > 0);

if (isPositive) {
  if (total === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Um valor negativo foi detectado');
}

// Parte 6
const nameChessPieces = 'rei';

switch (nameChessPieces.toLowerCase()) {
  case 'peão':
    console.log('Movimenta 1 casa pra frente e come na diagonal, de início ele anda 2 casas');
    break;

  case 'torre':
    console.log('Movimenta na horizontal e vertical');
    break;

  case 'cavalo':
    console.log('Movimenta em formato de "L", ou seja movimenta 3 casas e depois vira 2 casas');
    break;

  case 'rainha':
    console.log('Movimenta na diagonal, horizontal e vertical');
    break;

  case 'bispo':
    console.log('Bispo movimenta na diagonal');
    break;

  case 'rei':
    console.log('Rei movimenta uma casa independente da direção');
    break;

  default:
    console.log('Peça não encontrada');
    break;
}

// Parte 7
const testGrade = 70;
let isValid = !((testGrade > 100) || (testGrade < 0));

if (isValid) {
  if (testGrade >= 90) {
    console.log('A');
  } else if (testGrade >= 80) {
    console.log('B');
  } else if (testGrade >= 70) {
    console.log('C');
  } else if (testGrade >= 60) {
    console.log('D');
  } else if (testGrade >= 50) {
    console.log('E');
  } else {
    console.log('F');
  }
} else {
  console.log('Nota inválida');
}

// Parte 8
a = 7;
b = 7;
c = 7;

const isEven = (a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0);

console.log(isEven);

// Parte 9
a = 6;
b = 6;
c = 6;

const isOdd = (a % 2 === 1) || (b % 2 === 1) || (c % 2 === 1);

console.log(isOdd);

// Parte 10
const productCost = 200;
const saleValue = 270;
let profit;
isValid = (productCost) >= 0 || (saleValue >= 0);

if (isValid) {
  profit = (saleValue - (productCost + (productCost * 0.20)));
  console.log(profit);
} else {
  console.log('Erro, o valor não pode ser negativo');
}

// Parte 11
let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
}

console.log(`Salário: ${baseSalary - aliquotIR}`);