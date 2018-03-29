import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'What is the result of the expression?';
const calc = () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  const chooseOperator = Math.floor(Math.random() * 3);
  switch (chooseOperator) {
    case 0: {
      const question = `Question: ${number1} + ${number2}`;
      const answer = number1 + number2;
      const quizPair = cons(question, String(answer));
      return quizPair;
    }
    case 1: {
      const question = `Question: ${number1} - ${number2}`;
      const answer = number1 - number2;
      const quizPair = cons(question, String(answer));
      return quizPair;
    }
    default: {
      const question = `Question: ${number1} * ${number2}`;
      const answer = number1 * number2;
      const quizPair = cons(question, String(answer));
      return quizPair;
    }
  }
};
const playCalc = () => playGame(calc, rules);
export default playCalc;
