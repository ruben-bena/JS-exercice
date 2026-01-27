import AbstractCommand from './abstractCommand.js'

export default class LoadGameCommand extends AbstractCommand {
    execute() {
        console.log("Esto es un LoadGameCommand")
    }
}