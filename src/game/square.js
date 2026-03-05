export default class Square {
    hasTreasure = false
    isRevealed = false

    toJSON() {
        return {
            hasTreasure: this.hasTreasure,
            isRevealed: this.isRevealed
        }
    }

    revealPosition() {
        if (!this.isRevealed) {
            this.isRevealed = true
        }
    }

    static fromJSON(data) {
        const square = new Square()
        square.hasTreasure = data.hasTreasure
        square.isRevealed = data.isRevealed
        return square
    }
}