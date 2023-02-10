import { getRandomNumber, startTheGame, isPrime } from '../../src/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGame = () => startTheGame(gameDescription, primeGame);

export default startGame;
