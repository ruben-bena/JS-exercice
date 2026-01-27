import AbstractCommand from './abstractCommand.js'

export default class SaveGameCommand extends AbstractCommand {
    execute() {
        console.log("Esto es un SaveGameCommand")
    }
}