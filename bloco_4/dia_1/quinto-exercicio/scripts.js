let a = 10;
let b = 2;
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

