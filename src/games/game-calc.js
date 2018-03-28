import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'What is the result of the expression?';
const calc = () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  const doTheMath = Math.floor(Math.random() * 3);
  switch (doTheMath) {
    case 0: {
      const question = `${number1} + ${number2}`;
      const answer = number1 + number2;
      const quizPair = cons(question, String(answer));
      return quizPair;
    }
    case 1: {
      const question = `${number1} - ${number2}`;
      const answer = number1 - number2;
      const quizPair = cons(question, String(answer));
      return quizPair;
    }
    case 2: {
      const question = `${number1} * ${number2}`;
      const answer = number1 * number2;
      const quizPair = cons(question, String(answer));
      return quizPair;
    }
    default: console.log('Error in calc function, switch clause');
  }
  return false;
};
const playCalc = () => playGame(calc, rules);
export default playCalc;
