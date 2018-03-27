import { cons } from 'hexlet-pairs';

export const rulesBrainCalc = () => console.log('What is the result of the expression?');
export const calc = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
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
calc();
