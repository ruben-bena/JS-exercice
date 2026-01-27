import AbstractCommand from './abstractCommand.js'
import Position from '../game/position.js'

export default class RevealPositionCommand extends AbstractCommand {
    position = new Position(-1,-1)

    constructor(position) {
        super()
        this.position = position
    }

    execute() {
        console.log("Esto es un RevealPositionCommand")
    }
}