import Game from '../game/game.js'
import Position from '../game/position.js'

export default class ConsoleRenderer {
    render(game) {
        // Cabecera
        const header = " 01234567"
        console.log(header)

        // Filas
        for (let row=0; row<6; row++) {
            let rowLine = String.fromCharCode(65 + row)
            for (let col=0; col<8; col++) {
                const position = new Position(row, col)
                rowLine += this.getSymbol(game, position)
            }
            console.log(rowLine)
        }
    }

    getSymbol(game, position) {
        if (game.board.getSquare(position).hasTreasure) {
            return "#"
        }
        return "·"
    }
}