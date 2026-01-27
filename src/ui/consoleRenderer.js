import Game from '../game/game.js'
import Position from '../game/position.js'

export default class ConsoleRenderer {
    render(game) {
        // Cabecera
        const header = " 01234567"
        if (game.cheatsEnabled) {
            console.log(header + " " + header)
        } else {
            console.log(header)
        }

        // Filas
        for (let row=0; row<6; row++) {
            let rowLine = String.fromCharCode(65 + row)
            let rowLineCheats = String.fromCharCode(65 + row)
            for (let col=0; col<8; col++) {
                const position = new Position(row, col)
                rowLine += this.getSymbol(game, position, false)
                rowLineCheats += this.getSymbol(game, position, true)
            }
            
            if (game.cheatsEnabled) {
                console.log(rowLine + " " + rowLineCheats)
            } else {
                console.log(rowLine)
            }
        }
    }

    getSymbol(game, position, cheatsEnabled) {
        if (game.board.getSquare(position).hasTreasure) {
            if (cheatsEnabled || game.board.getSquare(position).isRevealed) {
                return "#"
            }
        } else if (game.board.getSquare(position).isRevealed) {
            return " "
        }
        return "·"
    }
}