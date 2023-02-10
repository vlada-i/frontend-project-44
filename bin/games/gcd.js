import { getGCD, getRandomNumber, startTheGame } from '../../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGCD(randomNumber1, randomNumber2);

  return [question, String(correctAnswer)];
};

const startGame = () => startTheGame(gameDescription, gcdGame);

export default startGame;
