import Square from './square.js'
import Position from './position.js'

export default class Board {
    board = [];
    rows = 6
    cols = 8

    constructor () {
        // Crear array board
        for (let i=0; i<this.rows; i++) {
            let row = []
            for (let j=0; j<this.cols; j++) {
                row.push(new Square())
            }
            this.board.push(row)
        }

        // Poner tesoros
        this.putRandomTreasures(16)
    }

    putRandomTreasures(numTreasures) {
        for (let i=0; i< numTreasures; i++) {
            let position
            do {
                let row = Math.floor(Math.random() * this.rows)
                let col = Math.floor(Math.random() * this.cols)
                position = new Position(row, col)
            } while (this.getSquare(position).hasTreasure)
            this.getSquare(position).hasTreasure = true
        }
    }

    getSquare(position) {
        return this.board[position.row][position.col]
    }
}