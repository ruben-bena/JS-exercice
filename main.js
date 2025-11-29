import { Board } from "./src/board.js"
import { Game } from "./src/game.js"

var game = new Game()
game.board.putRandomTreasures(game.maxTreasures)
console.log(game.board.toString())

//const readline = require('readline').promises

function main() {
    var board = generateNewBoard()
    fillBoardWithTreasures(board)
    var remainingIntents = 32
    var cheatMode = false
    while (remainingIntents > 0) {
        printBoard(board)
        // askUserInput()
        remainingIntents--
    }
}

function generateNewBoard() {
    var board = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ]
    return board
}

async function askUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const option = await rl.question("Que vols fer? (posa 'ajuda' per llistar les opcions)")
    switch (option) {
        case "ajuda":
            printOptions()
            break
        case "carregar partida":
            break
        case "guardar partida":
            break
        case "activar trampa":
            break
        case "desactivar trampa":
            break
        case "destapar xy":
            break
        case "puntuacio":
            break
        default:
            console.log("Opció invalida! Torna a probar...")
    }
    rl.close() // Tancar la lectura 'readline'
}

function printOptions() {
    console.log("Disposes de aquestes opcions per jugar:")
    console.log("'ajuda' --> L'acabes de posar perque volias ajuda...doncs aquesta opció t'ajuda")
    console.log("'carregar partida *.json' --> Carrega la partida si existeix. El simbol '*' representa el nom de la teva partida guardada")
    console.log("'guardar partida *.json' --> Guarda la teva partida. El simbol '*' representa el nom de la teva partida guardada")
    console.log("'")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
}

function fillBoardWithTreasures(board) {
    const maxTreasures = 16
    var finished = false
    while (!finished) {
        const i = Math.floor(Math.random() * 6)
        const j = Math.floor(Math.random() * 8)
        const squareWithTreasure = board[i][j] === 1
        if (squareWithTreasure) {
            continue
        }
        board[i][j] = 1
        const currentTreasures = countRemainingTreasures(board)
        if (currentTreasures >= maxTreasures) {
            finished = true
        }
    }
    
}

function countRemainingTreasures(board) {
    var counter = 0
    for (i=0 ; i<board.length ; i++) {
        for (j=0 ; j<board[0].length ; j++) {
            // console.log(`board[i][j] = ${board[i][j]}`)
            const isTreasure = board[i][j] === 1
            if (isTreasure) {
                counter++
            }
        }
    }
    return counter
}

function countFoundTreasures(board) {
    return 16 - countRemainingTreasures(board)
}

function printBoard(board) {
    const header = " 01234567"
    console.log(header)

    let rowLetters = {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
        5: "F",
    }

    for (i=0 ; i<board.length ; i++) {
        var line = `${rowLetters[i]}`
        for (j=0 ; j<board[0].length ; j++) {
            const value = board[i][j]
            var symbol = ""
            if (value === 0) {
                symbol = "·"
            } else if (value === 1) {
                symbol = "ñ"
            }
            line += symbol
        }
        console.log(line)
    }
}