import AbstractCommand from './abstractCommand.js'

export default class HelpCommand extends AbstractCommand {
    execute() {
        console.log("Esto es un HelpCommand")
    }
}