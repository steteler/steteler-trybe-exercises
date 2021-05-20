/* eslint-disable no-return-assign */
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (rightAnswers, studentAnswers, callback) =>
  studentAnswers.reduce((accumulator, _, index) => accumulator += callback(rightAnswers[index], studentAnswers[index]), 0);

console.log(checkAnswer(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswersIndex, sAnswersIndex) => {
  if (sAnswersIndex === rAnswersIndex) return 1; 
  if (sAnswersIndex === 'N.A') return 0;
  return 0.5;
}));