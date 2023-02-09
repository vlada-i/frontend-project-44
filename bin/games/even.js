import sayHiToPlayer from "../../src/cli.js"
import { getRandomNumber } from "../../src/index.js";
import readlineSync from 'readline-sync';

const evenGame = () => {
    const playerName = sayHiToPlayer();
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let attempt = 0; attempt < 3; attempt += 1) {
        const randomNumber = getRandomNumber();
        const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
        console.log(`Question: ${randomNumber}`);
        const playerAnswer = readlineSync.question('Your answer: ');
        if (playerAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!'`);
            break;
        }
        if (attempt >= 3) break;
    }
    console.log(`Congratulations, ${playerName}!`);
};

export default evenGame;