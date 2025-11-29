export class Board {
    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols
        this.board = this.generateEmptyBoard(rows, cols)
    }

    generateEmptyBoard(rows, cols) {
        let newBoard = []
        for (let i=0; i<rows; i++) {
            let newRow = []
            for (let j=0; j<cols; j++) {
                newRow.push(0)
            }
            newBoard.push(newRow)
        }
        return newBoard
    }

    putRandomTreasures(numTreasuresToHide) {
        let numHiddenTreasures = 0
        while (numHiddenTreasures < numTreasuresToHide) {
            const i = Math.floor(Math.random() * this.rows)
            const j = Math.floor(Math.random() * this.cols)
            const value = this.board[i][j]
            if (value === 0) {
                this.board[i][j] = 1
                numHiddenTreasures++
            }
        }
    }

    countTreasures() {
        let counter = 0
        for (let i=0; i<this.rows; i++) {
            for (let j=0; j<this.cols; j++) {
                if (this.board[i][j] === 1) {
                    counter++
                }
            }
        }
        return counter
    }

    toString() {
        let result = ""

        // header
        let header = " "
        for (let j=0; j<this.cols; j++) {
            header += j.toString()
        }
        result += header + "\n"

        // lines
        for (let i=0; i<this.rows; i++) {
            let newLine = ""
            newLine += String.fromCharCode(65 + i) // 65 is character 'A', following ones are 'B', 'C', ...
            for (let j=0; j<this.cols; j++) {
                const cellValue = this.board[i][j]
                let symbol = ""
                switch (cellValue) {
                    case 0: symbol="·"; break
                    case 1: symbol="X"; break
                    case 2: symbol="X"; break
                }
                newLine += symbol
            }
            result += newLine 
            if (i+1 !== this.rows) { result += "\n"}
        }

        return result
    }
}