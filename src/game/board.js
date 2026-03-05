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

    thereAreUncoveredTreasures() {
        for (const row of this.board) { 
            for (const square of row) {
                const thereIsAnUncoveredTreasure = square.hasTreasure && !square.isRevealed
                if (thereIsAnUncoveredTreasure) {
                    return true
                }
            }
        }
        return false
    }

    numberOfSquaresToClosestTreasure(referencePosition) {
        let currentMinimum = Number.MAX_SAFE_INTEGER
        for (let i=0; i<this.rows; i++) {
            for (let j=0; j<this.cols; j++) {
                const imLookingAtMyself = i === referencePosition.row && j === referencePosition.j
                if (imLookingAtMyself) {
                    continue
                }
                const comparedPosition = new Position(i, j)
                const comparedSquare = this.getSquare(comparedPosition)
                const positionHasUncoveredTreasure = comparedSquare.hasTreasure && !comparedSquare.isRevealed
                if (positionHasUncoveredTreasure) {
                    const calculatedDistance = this.getDistanceBetweenThesePositions(referencePosition, comparedPosition)
                    if (calculatedDistance < currentMinimum) {
                        currentMinimum = calculatedDistance
                    }
                }
            }
        }
        return currentMinimum
    }

    getDistanceBetweenThesePositions(firstPosition, secondPosition) {
        return Math.abs(firstPosition.row - secondPosition.row) + Math.abs(firstPosition.col - secondPosition.col)
    }

    toJSON() {
        return {
            board: this.board.map(row =>
                row.map(square =>
                    square.toJSON())
            )
        }
    }

    static fromJSON(data) {
        const board = new Board()
        board.board = data.board.map(row =>
            row.map(squareData => Square.fromJSON(squareData))
        )
        return board
    }
}