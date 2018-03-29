import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'What number is missing in this progression?';
const progression = () => {
  const number1 = Math.floor(Math.random() * 50);
  const number2 = Math.floor(Math.random() * 50);
  const createQuizPair = (x, y) => {
    let question = '';
    let answer = 0;
    for (let count = 0; count < 10;) {
      if (count === 4) {
        question += '... ';
        answer = String(x + (y * (count + 1)));
      } else {
        question += `${String(x + (y * (count + 1)))} `;
      }
      count += 1;
    }
    return cons(question, answer);
  };
  return createQuizPair(number1, number2);
};
const playProgression = () => playGame(progression, rules);
export default playProgression;
