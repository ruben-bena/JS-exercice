import AbstractCommand from './abstractCommand.js'

export default class CheatCommand extends AbstractCommand {
    execute(game) {
        game.cheatsEnabled = !game.cheatsEnabled
        console.log()
        console.log(`***** cheatsEnabled=${game.cheatsEnabled} *****`)
        console.log()
    }
}