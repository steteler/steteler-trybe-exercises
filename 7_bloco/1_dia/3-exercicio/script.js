// código com: arrow functions, template literals e ternary operator, tudo do javascript ES6.
const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5));


/* Basicamente a mesma coisa que a função abaixo.
const factorial = number => {
  let result = 1

  for (let index = 2; index <= number; index += 1) {
      result *= i
  }

  return result
}

console.log(factorial(5));
*/