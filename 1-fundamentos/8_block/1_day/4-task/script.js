// Sugestão de respostas a serem validadas.
const CORRECT_ANSWER = 'higher order function';
const USER_ANSWER = 'HIGHER ORDER FUNCTION';

const checkAnswer = (correctAnswer) =>
  (userAnswer) => correctAnswer === userAnswer.toLowerCase();

console.log(checkAnswer(CORRECT_ANSWER)(USER_ANSWER));