import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';
export const getPairGcd = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);
  const question = `Question: ${number1} ${number2}`;
  const findGcd = (num1, num2) => {
    if ((num1 % num2) === 0) {
      return num2;
    } return findGcd(num2, num1 - (num2 * Math.floor(num1 / num2)));
  };
  const answer = findGcd(maxNumber, minNumber);
  const quizPair = cons(question, String(answer));
  return quizPair;
};
const playGcd = () => playGame(getPairGcd, rules);
export default playGcd;

