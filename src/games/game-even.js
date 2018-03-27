import { cons } from 'hexlet-pairs';

export const rulesBrainEven = () => console.log('Answer "yes" if number even otherwise answer "no".');
export const even = () => {
  const number = Math.floor(Math.random() * 1000);
  const question = `${number}`;
  switch (number % 2) {
    case 0: {
      const answer = 'yes';
      const quizPair = cons(question, answer);
      return quizPair;
    }
    case 1: {
      const answer = 'no';
      const quizPair = cons(question, answer);
      return quizPair;
    }
    default: console.log('Error in even function, switch clause');
  }
  return false;
};
