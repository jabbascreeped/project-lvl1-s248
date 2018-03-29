import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Answer if the number is prime or not.';
const prime = () => {
  const number = Math.floor((Math.random() * 198) + 2);
  const check = (x) => {
    if ((x % 2) === 0) {
      return 0;
    }
    for (let checkDiv = 3; checkDiv < Math.sqrt(number);) {
      if (checkDiv > 3 && (checkDiv % 3) === 0) {
        checkDiv += 2;
      } else {
        if ((x % checkDiv) === 0) {
          return 0;
        } checkDiv += 2;
      }
    }
    return 1;
  };
  const question = (`Is this number prime? ${String(number)}`);
  const answer = check(number) === 1 ? 'yes' : 'no';
  return cons(question, answer);
};
const playPrime = () => playGame(prime, rules);
export default playPrime;
