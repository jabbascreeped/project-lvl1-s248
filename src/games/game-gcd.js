import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Find the greatest common divisor of given numbers.';
export const gcd = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);
  const question = `${number1} ${number2}`;
  for (let i = 1; i <= minNumber / 2;) {
    if (minNumber % i === 0 && maxNumber % (minNumber / i) === 0) {
      const answer = minNumber / i;
      const quizPair = cons(question, String(answer));
      return quizPair;
    }
    i += 1;
  }
  const answer = 1;
  const quizPair = cons(question, String(answer));
  return quizPair;
};
const playGcd = () => playGame(gcd, rules);
export default playGcd;

