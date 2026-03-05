import Board from './board.js'

export default class Game {
    board
    isGameOver = false
    isVictory = false
    cheatsEnabled = false
    initialTries = 32
    triesLeft = this.initialTries
    currentScore = 0

    constructor() {
        this.board = new Board()
    }

    execute(command) {
        command.execute(this)
        this.updateGameState()
    }

    updateGameState() {
        const playerHasLost = !this.board.thereAreUncoveredTreasures() && this.triesLeft > 0
        const playerHasWon = this.board.thereAreUncoveredTreasures() && this.triesLeft === 0

        if (playerHasLost || playerHasWon) {
            this.isGameOver = true
            if (playerHasWon) {
                this.isVictory = true
            }
        }
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