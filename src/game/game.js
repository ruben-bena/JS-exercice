import Board from './board.js'

export default class Game {
    board
    isGameOver = false
    isVictory = false
    cheatsEnables = false
    initialTries = 32
    tiresLeft = this.initialTries

    constructor() {
        this.board = new Board()
    }
}