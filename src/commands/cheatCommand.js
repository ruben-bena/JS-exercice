import AbstractCommand from './abstractCommand.js'

export default class CheatCommand extends AbstractCommand {
    execute(game) {
        console.log("Esto es un CheatCommand")
        console.log(`Antes del comando: cheatsEnabled=${game.cheatsEnabled}`)
        game.cheatsEnabled = !game.cheatsEnabled
        console.log(`Después del comando: cheatsEnabled=${game.cheatsEnabled}`)
    }
}