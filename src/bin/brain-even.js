#!/usr/bin/env node
import { nameUser, welcomeMessage, playGame } from '..';
import { rulesBrainEven, even } from '../games/game-even';

welcomeMessage();
rulesBrainEven();
nameUser();
playGame(even);
