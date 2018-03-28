import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';
export const even = () => {
  const number = Math.floor(Math.random() * 1000);
  const question = `${number}`;
  switch (number % 2) {
    case 0: {
      const answer = 'yes';
      const quizPair = cons(question, answer);
      return quizPair;
    }
    default: {
      const answer = 'no';
      const quizPair = cons(question, answer);
      return quizPair;
    }
  }
};
const playEven = () => playGame(even, rules);
export default playEven;
