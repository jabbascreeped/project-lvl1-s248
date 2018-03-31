import { cons } from 'hexlet-pairs';
import { playGame } from '..';

const rules = 'Answer if the number is prime or not.\n';
const getPairPrime = () => {
  const number = Math.floor((Math.random() * 198) + 2);
  const isNumberPrime = (numToCheck) => {
    if (numToCheck > 2 && numToCheck % 2 === 0) {
      return false;
    } const findDiv = (a, b) => {
      if ((a % b) === 0) {
        return b;
      } return findDiv(a, b + 1);
    };
    if (findDiv(numToCheck, 2) < numToCheck) {
      return false;
    } return true;
  };
  const question = (`Is this number prime? ${String(number)}`);
  const answer = isNumberPrime(number) ? 'yes' : 'no';
  return cons(question, answer);
};
const playPrime = () => playGame(getPairPrime, rules);
export default playPrime;
