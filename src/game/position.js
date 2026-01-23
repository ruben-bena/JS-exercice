export default class Position {
    row = -1
    col = -1

    constructor (row, col) {
        this.row = row
        this.col = col
    }

    isValidPosition() {
        const isValidRow = row >= 0 && row < 6
        const isValidCol = col >= 0 && col < 8
        return isValidRow & isValidCol
    }
}