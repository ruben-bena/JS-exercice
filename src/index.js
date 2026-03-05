import ConsoleRenderer from "./ui/consoleRenderer.js"
import Game from './game/game.js'
import CommandParser from "./commands/commandParser.js"
import readline from 'node:readline/promises'

const game = new Game()
const consoleRenderer = new ConsoleRenderer()
const commandParser = new CommandParser()
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

while (!game.isGameOver) {
    // Dibujar partida
    consoleRenderer.render(game)

    // Pedir input
    const input = await rl.question("escribe: ")

    // Gestionar input y convertirlo en acción
    const command = commandParser.parse(input)
    if (command !== null) {
        game.execute(command)
    }
}

console.log("partida acabada")