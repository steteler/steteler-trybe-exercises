const a = 7;
const b = 7;
const c = 6;

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