import sayHiToPlayer from "./cli.js";
import readlineSync from 'readline-sync';

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
}

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
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!'`);
            return;
        }
    }   
    console.log(`Congratulations, ${playerName}!`);
}

export {  
    getRandomNumber,
    getOper,
    startTheGame,
};