import AbstractCommand from './abstractCommand.js'

export default class ScoreCommand extends AbstractCommand {
    execute() {
        console.log("Esto es un ScoreCommand")
    }
}