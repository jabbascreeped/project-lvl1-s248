import readlineSync from 'readline-sync';

export const nameUser = () => {
	const yourName = readlineSync.question('May I have your name? \x1b[1m');
	console.log(`\x1b[0mHello, \x1b[1m${yourName}!\x1b[0m`);
};
