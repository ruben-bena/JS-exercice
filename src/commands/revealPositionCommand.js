import AbstractCommand from './abstractCommand.js'
import Position from '../game/position.js'
import Game from '../game/game.js'

export default class RevealPositionCommand extends AbstractCommand {
    position

    constructor(position) {
        super()
        this.position = position
    }

    execute(game) {
        const square = game.board.getSquare(this.position)
        if (square.isRevealed) {
            console.log("Esta casilla ya estaba revelada...")
            return
        }
        if (square.hasTreasure) {
            game.currentScore++
        } else {
            game.triesLeft--
        }
        square.revealPosition()
        if (game.board.thereAreUncoveredTreasures()) {
            console.log(`Número de casillas hasta el tesoro más cercano = ${game.board.numberOfSquaresToClosestTreasure(this.position)}`)
        }
    }
}