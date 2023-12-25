import { Game } from './game';
import { Player } from './player';
import * as Helpers from './utility';
import * as _lodash from 'lodash';

let newGame: Game;

document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Helpers.getValue('playername');

    console.log(_lodash.upperCase(player.name));

    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();

    const calcScoreElement:HTMLElement = document.getElementById('calculate')!;
    calcScoreElement.addEventListener('click', () => newGame.calculateScore());
})
