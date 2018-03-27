import readlineSync from 'readline-sync';

let yourName = '';
export const nameUser = () => {
  yourName = readlineSync.question('May I have your name? ');
  return yourName;
};
export const helloUser = () => console.log(`Hello, ${yourName}!`);
export const welcomeMessage = () => console.log('Welcome to the Brain Games!');
export const rulesBrainEven = () => console.log('Answer "yes" if number even otherwise answer "no".');
const success = () => console.log(`Congratulations, ${yourName}`);
const askQuestion = x => console.log(`Question: ${x}`);
const giveAnswer = () => readlineSync.question('Your answer: ');
const correctAnswer = () => console.log('Correct!');
const wrongAnswer = (x, y) => {
  console.log(`'${x}' is wrong answer ;(. Correct answer was '${y}'.`);
  console.log(`Let's try again, ${yourName}!`);
};
export const gameEven = () => {
  let count = 0;
  for (; count < 3;) {
    const number = Math.floor(Math.random() * 1000);
    const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
    askQuestion(number);
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
