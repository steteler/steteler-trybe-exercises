// Parte 1

let a = 10;
let b = 2;
let c = 1;

console.log('Adição:', a + b, '\nSubtração:', a - b, '\nMultiplicação:', a * b, '\nDivisão:', a / b, '\nMódulo:', a % b);


// Parte 2


if (a > b) {
  console.log('\nO valor', a, 'é maior que o valor', b)
}
else {
  console.log('\nO valor', b, 'é maior que o valor', a)
};


// Parte 3


a = 7
b = 7
c = 6

if (a > b && a > c) {
  console.log('\nO número maior é o', a);
}
else if (b > a && b > c) {
  console.log('\nO número maior é o', b);
}
else if (c > a && c > b) {
  console.log('\nO número maior é o', c);
}
else {
  console.log('\nAmigão, tem 2 números iguais ai bicho, pode n');
};



// Parte 4


a = 0;

if (a > 0) {
  console.log('\nO valor é positivo');
}
else if (a < 0) {
  console.log('\nO valor é negativo');
}
else {
  console.log('\nO valor é 0');
};


// Parte 5


let degreeAngleA = 30;
let degreeAngleB = 60;
let degreeAngleC = 90;
let total;
let isPositive;

total = degreeAngleA + degreeAngleB + degreeAngleC;

isPositive = (degreeAngleA > 0) && (degreeAngleB > 0) && (degreeAngleC > 0);

if (isPositive) {
  if (total === 180) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
else {
  console.log('Um valor negativo foi detectado');
}


// Parte 6


let nameChessPieces = 'rei';

switch (nameChessPieces.toLowerCase()) {
  case 'peão':
    console.log('O peão movimenta 1 casa pra frente, no primeiro movimento ele pode movimentar 2 casas, e come peça na diagonal')
    break;

  case 'torre':
    console.log('A torre movimenta na horizontal e vertical')
    break;

  case 'cavalo':
    console.log('O cavalo movimenta em formato de "L", ou seja movimenta 3 casas e depois vira 2 casas')
    break;

  case 'rainha':
    console.log('A rainha movimenta na diagonal, horizontal e vertical')
    break;

  case 'bispo':
    console.log('O bispo movimenta na diagonal')
    break;

  case 'rei':
    console.log('O rei movimenta uma casa independente da direção')
    break;

  default:
    console.log('Peça não encontrada')
    break;
}


// Parte 7


let testGrade = 70;
let isValid = !((testGrade > 100) || (testGrade < 0));

if (isValid) {
  if (testGrade >= 90 ) {
    console.log('A');
  } 
  else if (testGrade >= 80) {
    console.log('B');
  } 
  else if (testGrade >= 70) {
    console.log('C');
  } 
  else if (testGrade >= 60) {
    console.log('D');
  } 
  else if (testGrade >= 50) {
    console.log('E');
  } 
  else {
    console.log('F');
  }
}
else {
  console.log('Nota inválida')
}


// Parte 8


a = 7;
b = 7;
c = 7;

let isEven = (a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0);

console.log(isEven);