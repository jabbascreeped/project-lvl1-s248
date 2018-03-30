import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Balance the given number.\n';
const balance = () => {
  const number = String(Math.floor(Math.random() * 9999));
  const question = (`Question: ${number}`);
  const numberCount = number.length;
  const sumDigits = (a, b) => {
    if (b === 1) {
      return Number(a[b - 1]);
    } return (Number(a[b - 1]) + sumDigits(a, b - 1));
  };
  const findAnswer = (x, y, z) => {
    if (y === 1) {
      return Math.floor(z / y);
    }
    return `${Math.floor(z / y)}${findAnswer(x, y - 1, z - Math.floor(z / y))}`;
  };
  const answer = findAnswer(number, numberCount, sumDigits(number, numberCount));
  return cons(question, answer);
};
const playBalance = () => playGame(balance, rules);
export default playBalance;
