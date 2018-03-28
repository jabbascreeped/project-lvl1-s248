import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Balance the given number.';
const balance = () => {
  const number = Math.floor(Math.random() * 9999);
  const question = String(number);
  const numberCount = question.length;
  let sum = 0;
  let answer = '';
  for (let count = 1; count <= numberCount;) {
    sum += Number(question[count - 1]);
    count += 1;
  }
  for (let count = 1; count <= numberCount;) {
    answer += String(Math.floor(sum / ((numberCount + 1) - count)));
    sum -= Math.floor(sum / ((numberCount + 1) - count));
    count += 1;
  }
  return cons(question, answer);
};
const playBalance = () => playGame(balance, rules);
export default playBalance;
