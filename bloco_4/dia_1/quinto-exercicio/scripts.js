let a = 10;
let b = 2;
let c = 1;
let maior;

console.log('Adição:', a + b, '\nSubtração:', a - b, '\nMultiplicação:', a * b, '\nDivisão:', a / b, '\nMódulo:', a % b);




if (a > b) {
  maior = a;
  console.log('\nO valor', a, 'é maior que o valor', b)
}
else {
  maior = b;
  console.log('\nO valor', b, 'é maior que o valor', a)
}



a = 7
b = 7
c = 6

if (a > b && a > c) {
  console.log('O número maior é o', a);
}
else if (b > a && b > c) {
  console.log('O número maior é o', b);
}
else if (c > a && c > b) {
  console.log('O número maior é o', c);
}
else {
  console.log('Amigão, tem 2 números iguais ai bicho, pode n');
}



