import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Answer if the number is prime or not.\n';
const prime = () => {
  const number = Math.floor((Math.random() * 198) + 2);
  const isNumberPrime = (numToCheck, divider) => {
    if ((numToCheck % 2) === 0) {
      return false;
    } if (divider > Math.sqrt(number)) {
      return true;
    } if ((number % divider) === 0) {
      return false;
    } return isNumberPrime(number, divider + 2);
  };
  const question = (`Is this number prime? ${String(number)}`);
  const answer = isNumberPrime(number, 3) ? 'yes' : 'no';
  return cons(question, answer);
};
const playPrime = () => playGame(prime, rules);
export default playPrime;
