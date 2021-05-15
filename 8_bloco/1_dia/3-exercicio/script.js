const numberChecker = (playerNumber, lotteryNumber) => (playerNumber === lotteryNumber ? 'Parabéns você acertou!' : 'Você errou!');

const lotteryResult = (playerNumber, callback) => {
  const lotteryNumber = Math.floor((Math.random() * 5) + 1);  
  return `${callback(playerNumber, lotteryNumber)}
  Seu número: ${playerNumber}
  Número sortiado: ${lotteryNumber}`;
};

console.log(lotteryResult(1, numberChecker));