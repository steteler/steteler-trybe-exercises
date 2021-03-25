let a = 10;
let b = 2;
let c = 1;
let degreeAngleA;
let degreeAngleB;
let degreeAngleC;
let total;
let isPositive;

console.log('Adição:', a + b, '\nSubtração:', a - b, '\nMultiplicação:', a * b, '\nDivisão:', a / b, '\nMódulo:', a % b);




if (a > b) {
  console.log('\nO valor', a, 'é maior que o valor', b)
}
else {
  console.log('\nO valor', b, 'é maior que o valor', a)
};



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





degreeAngleA = 30;
degreeAngleB = 60;
degreeAngleC = 90;

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
