#!/usr/bin/env node
import { nameUser, welcomeMessage, playGame } from '..';
import { calc, rulesBrainCalc } from '../games/game-calc';
// import { cons, car, cdr } from 'hexlet-pairs';

welcomeMessage();
rulesBrainCalc();
nameUser();
playGame(calc);
