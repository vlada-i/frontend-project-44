import readlineSync from 'readline-sync';
import sayHiToPlayer from './cli.js';

const getRandomNumber = (min = 0, max = 100) => Math.round(Math.random() * (max - min) + min);

const getOper = (oper, num1, num2) => {
  let correctAnswer = 0;
  let question = '';

  switch (oper) {
    case '+':
      correctAnswer += num1 + num2;
      question += `${num1} + ${num2}`;
      break;
    case '-':
      correctAnswer += num1 - num2;
      question += `${num1} - ${num2}`;
      break;
    case '*':
      correctAnswer += num1 * num2;
      question += `${num1} * ${num2}`;
      break;
    default:
      break;
  }
  return [String(correctAnswer), question];
};

const startTheGame = (gameDescription, game) => {
  const playerName = sayHiToPlayer();
  console.log(gameDescription);
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const getGameData = game();
    const question = getGameData[0];
    const correctAnswer = getGameData[1];
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

const getGCD = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else num2 -= num1;
  }
  return num1;
};

const getProgression = () => {
  const arr = [];
  const progressionStep = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(5, 10);
  for (let i = progressionStep; i <= progressionStep * progressionLength; i += progressionStep) {
    arr.push(i);
  }
  arr[getRandomNumber(1, arr.length - 2)] = '..';
  const correctAnswer = arr[arr.indexOf('..') - 1] + progressionStep;
  const result = arr.join(' ');
  return [correctAnswer, result];
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export {
  getRandomNumber,
  getOper,
  startTheGame,
  getGCD,
  getProgression,
  isPrime,
};
