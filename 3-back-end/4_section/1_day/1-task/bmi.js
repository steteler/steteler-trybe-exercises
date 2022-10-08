const { questionInt, questionFloat, } = require("readline-sync");

const weight = questionInt("What’ your weight? ");
const height = questionFloat("What’ your height? ");

const imc = weight / (height ** 2);

const calcImc = () => {
  if (imc < 18.5) {
    return "Abaixo do peso (magreza)";
  } if (imc <= 24.9 && imc >= 18.5) {
    return "Peso normal";
  } if (imc <= 29.9 && imc >= 25.0) {
    return "Acima do peso (sobrepeso)";
  } if (imc <= 34.9 && imc >= 30.0) {
    return "Obesidade grau I";
  } if (imc <= 39.9 && imc >= 35.0) {
    return "Obesidade grau II";
  }
  return "Obesidade graus III e IV";
}

console.log(`${calcImc()} - ${imc}`);