import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';

let yourName = '';
export const getUserName = () => {
  yourName = readlineSync.question('May I have your name? ');
  return yourName;
};
const showGameRules = x => console.log(`${x}\n`);
export const sayHello = () => console.log(`Hello, ${yourName}!`);
export const showWelcomeMessage = () => console.log('Welcome to the Brain Games!');
const showSuccess = () => console.log(`Congratulations, ${yourName}!`);
const getAnswer = () => readlineSync.question('Your answer: ');
const confirmCorrect = () => console.log('Correct!');
const showWrongAnswer = (x, y) => {
  console.log(`'${x}' is wrong answer ;(. Correct answer was '${y}'.`);
  console.log(`Let's try again, ${yourName}!`);
};
export const playGame = (x, y) => {
  showWelcomeMessage();
  showGameRules(y);
  yourName = getUserName();
  const runOneStep = (playData, wins) => {
    if (wins === 3) {
      return showSuccess();
    }

    const askAndCheck = (f) => {
      const useQuizPair = f();
      console.log(car(useQuizPair));
      const expectedAnswer = cdr(useQuizPair);
      const userAnswer = getAnswer();
      return ((userAnswer === expectedAnswer) ? 1 : cons(userAnswer, expectedAnswer));
    };

    const stepResult = askAndCheck(playData);
    if (stepResult === 1) {
      confirmCorrect();
      return runOneStep(playData, wins + 1);
    }

    return showWrongAnswer(car(stepResult), cdr(stepResult));
  };

  runOneStep(x, 0);
};
