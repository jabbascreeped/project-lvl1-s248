import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

let yourName = '';
export const nameUser = () => {
  yourName = readlineSync.question('May I have your name? ');
  return yourName;
};
export const helloUser = () => console.log(`Hello, ${yourName}!`);
export const welcomeMessage = () => console.log('Welcome to the Brain Games!');
const success = () => console.log(`Congratulations, ${yourName}`);
const askQuestion = x => console.log(`Question: ${x}`);
const giveAnswer = () => readlineSync.question('Your answer: ');
const correctAnswer = () => console.log('Correct!');
const wrongAnswer = (x, y) => {
  console.log(`'${x}' is wrong answer ;(. Correct answer was '${y}'.`);
  console.log(`Let's try again, ${yourName}!`);
};
export const playGame = (x) => {
  let count = 0;
  for (; count < 3;) {
    const useQuizPair = x();
    askQuestion(car(useQuizPair));
    const expectedAnswer = cdr(useQuizPair);
    const userAnswer = giveAnswer();
    if (userAnswer === expectedAnswer) {
      correctAnswer();
      count += 1;
    } else {
      wrongAnswer(userAnswer, expectedAnswer);
      return false;
    }
  }
  if (count === 3) {
    return success();
  } return false;
};
