import AbstractCommand from './abstractCommand.js'
import Game from '../game/game.js'

export default class ScoreCommand extends AbstractCommand {
    execute(game) {

        console.log("\n=================================");
        console.log("           🏆  MARCADOR  🏆");
        console.log("=================================\n");

        console.log(`   🎯  Puntuación actual :  ${game.currentScore}`);
        console.log(`   🎲  Intentos restantes:  ${game.triesLeft}\n`);

        console.log("=================================\n");
    }
}