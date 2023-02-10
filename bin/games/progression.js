import { startTheGame, getProgression } from '../../src/index.js';

const gameDescription = 'What number is missing in the progression?';

const progressionGame = () => {
  const answers = getProgression();
  const correctAnswer = answers[0];
  const question = answers[1];

  return [question, String(correctAnswer)];
};

const startGame = () => startTheGame(gameDescription, progressionGame);

export default startGame;
