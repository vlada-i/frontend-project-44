import { getOper, getRandomNumber, startTheGame } from "../../src/index.js";

const gameDescription = 'What is the result of the expression?';

const getRandomOper = () => {
    const operands = '+-*';
    return operands[getRandomNumber(0, operands.length - 1)];
}

const calcGame = () => {
    const randomNumber1 = getRandomNumber(1, 20);
    const randomNumber2 = getRandomNumber(1, 20);
    const oper = getRandomOper();
    const answers = getOper(oper, randomNumber1, randomNumber2);
    const question = answers[1];
    const correctAnswer = answers[0];

    return [question, correctAnswer];
}

const startGame = () => startTheGame(gameDescription, calcGame);

export default startGame;