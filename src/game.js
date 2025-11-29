import { Board } from "./board.js"

export class Game {
    constructor() {
        this.triestLeft = 32
        this.maxTreasures = 16
        this.cheatMode = false

        this.board = new Board(6,8)
    }
}