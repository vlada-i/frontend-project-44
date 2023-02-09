import { getRandomNumber, startTheGame } from "../../src/index.js";

const isEven = (num) => num % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {  
    const randomNumber = getRandomNumber();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    
    return [randomNumber, correctAnswer];
};

const startGame = () => startTheGame(gameDescription, evenGame);

export default startGame;