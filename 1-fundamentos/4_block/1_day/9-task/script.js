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
  console.log('Ângulo inválido');
}