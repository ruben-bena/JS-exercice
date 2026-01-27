import AbstractCommand from './abstractCommand.js'

export default class CheatCommand extends AbstractCommand {
    execute() {
        console.log("Esto es un CheatCommand")
    }
}