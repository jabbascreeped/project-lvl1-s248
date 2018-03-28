import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Find the greatest common divisor of given numbers.';
export const gcd = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);
  const question = `${number1} ${number2}`;
  const gcdFind = (num1, num2) => {
    if ((num1 % num2) === 0) {
      return num2;
    } return gcdFind(num2, num1 - (num2 * Math.floor(num1 / num2)));
  };
  const answer = gcdFind(maxNumber, minNumber);
  const quizPair = cons(question, String(answer));
  return quizPair;
};
const playGcd = () => playGame(gcd, rules);
export default playGcd;

