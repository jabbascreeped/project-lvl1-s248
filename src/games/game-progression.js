import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'What number is missing in this progression?';
const getPairProgression = () => {
  const number1 = Math.floor(Math.random() * 50);
  const number2 = Math.floor(Math.random() * 50);
  const buildPair = (x, y, z) => {
    const buildQuestion = (a, b, c) => {
      if (c === 1) {
        return String(a);
      }

      if (c === (Math.floor(z / 2) + 1)) {
        return `... ${buildQuestion(a + b, b, c - 1)}`;
      }

      return `${a} ${buildQuestion(a + b, b, c - 1)}`;
    };

    const buildAnswer = (a, b, c) => {
      if (c === 1) {
        return String(a);
      }

      return buildAnswer(a + b, b, c - 1);
    };

    return cons(buildQuestion(x, y, z), buildAnswer(x, y, Math.floor(z / 2)));
  };

  return buildPair(number1, number2, 10);
};

const playProgression = () => playGame(getPairProgression, rules);
export default playProgression;
