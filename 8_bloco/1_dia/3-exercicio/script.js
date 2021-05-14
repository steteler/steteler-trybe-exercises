function numberChecker(playerNumber, LOTTERY_NUMBER) {
  return playerNumber === LOTTERY_NUMBER ? 'Parabéns você acertou!' : 'Você errou!';
}

const lotteryResult = (playerNumber, callback) => {
  const LOTTERY_NUMBER = Math.floor((Math.random() * 5) + 1);  
  return `${callback(playerNumber, LOTTERY_NUMBER)}
  Seu número: ${playerNumber}
  Número sortiado: ${LOTTERY_NUMBER}`;
};

console.log(lotteryResult(1, numberChecker));