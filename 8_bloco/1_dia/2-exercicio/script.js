const numberChecker = (playerNumber, LOTTERY_NUMBER) => playerNumber === LOTTERY_NUMBER 
? `Parabéns você acertou!` 
: `Você errou!`;

const lotteryResult = (playerNumber, callback) => {
  const LOTTERY_NUMBER = Math.floor((Math.random() * 5) + 1);  
  return `${callback(playerNumber, LOTTERY_NUMBER)}\nSeu número: ${playerNumber}\nNúmero sortiado: ${LOTTERY_NUMBER}`;
};

console.log(lotteryResult(1, numberChecker));