import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';
export const getPairEven = () => {
  const number = Math.floor(Math.random() * 1000);
  const question = (`Question: ${String(number)}`);
  const isNumberEven = (x) => {
    if ((x % 2) === 0) {
      return true;
    }

    return false;
  };

  const answer = isNumberEven(number) ? 'yes' : 'no';
  const quizPair = cons(question, answer);
  return quizPair;
};

const playEven = () => playGame(getPairEven, rules);
export default playEven;
