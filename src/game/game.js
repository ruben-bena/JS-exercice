import Board from './board.js'

export default class Game {
    board
    isGameOver = false
    isVictory = false
    cheatsEnabled = false
    initialTries = 32
    triesLeft = this.initialTries

    constructor() {
        this.board = new Board()
    }

    execute(command) {
        command.execute(this)
    }

    toJSON() {
        return {
            board: this.board.toJSON(),
            isGameOver: this.isGameOver,
            isVictory: this.isVictory,
            cheatsEnabled: this.cheatsEnabled,
            initialTries: this.initialTries,
            triesLeft: this.triesLeft
        }
    }

    fromJSON(data) {
        this.board = Board.fromJSON(data.board)
        this.isGameOver = data.isGameOver
        this.isVictory = data.isVictory
        this.cheatsEnabled = data.cheatsEnabled
        this.initialTries = data.initialTries
        this.triesLeft = data.triesLeft
    }
}