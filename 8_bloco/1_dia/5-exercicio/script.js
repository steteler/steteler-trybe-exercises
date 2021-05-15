const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (rightAnswers, studentAnswers, callback) => {
  let total = 0;
  // eslint-disable-next-line guard-for-in
  for (const answer in studentAnswers) {
    total += callback(rightAnswers[answer], studentAnswers[answer]);
  }
  return total;
};

console.log(checkAnswer(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswersIndex, sAnswersIndex) => {
  if (sAnswersIndex === rAnswersIndex) {
    return 1;
  } 
  if (sAnswersIndex === 'N.A') {
    return 0;
  }
  return 0.5;
}));