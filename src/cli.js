import readlineSync from 'readline-sync';

const sayHiToPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export default sayHiToPlayer;
