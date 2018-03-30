import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';

let yourName = '';
export const nameUser = () => {
  yourName = readlineSync.question('May I have your name? ');
  return yourName;
};
const gameRules = x => console.log(x);
export const helloUser = () => console.log(`Hello, ${yourName}!`);
export const welcomeMessage = () => console.log('Welcome to the Brain Games!');
const success = () => console.log(`Congratulations, ${yourName}!`);
const giveAnswer = () => readlineSync.question('Your answer: ');
const correctAnswer = () => console.log('Correct!');
const wrongAnswer = (x, y) => {
  console.log(`'${x}' is wrong answer ;(. Correct answer was '${y}'.`);
  console.log(`Let's try again, ${yourName}!`);
};
export const playGame = (x, y) => {
  welcomeMessage();
  gameRules(y);
  yourName = nameUser();
  const game = (playData, wins) => {
    if (wins === 3) {
      return success();
    }
    const askAndCheck = (f) => {
      const useQuizPair = f();
      console.log(car(useQuizPair));
      const expectedAnswer = cdr(useQuizPair);
      const userAnswer = giveAnswer();
      return ((userAnswer === expectedAnswer) ? 1 : cons(userAnswer, expectedAnswer));
    };
    const questionResult = askAndCheck(playData);
    if (questionResult === 1) {
      correctAnswer();
      return game(playData, wins + 1);
    }
    return wrongAnswer(car(questionResult), cdr(questionResult));
  };
  game(x, 0);
};
