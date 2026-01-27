import AbstractCommand from './abstractCommand.js'

export default class RevealPositionCommand extends AbstractCommand {
    position

    constructor(position) {
        this.position = position
    }

    execute() {
        console.log("Esto es un RevealPositionCommand")
    }
}