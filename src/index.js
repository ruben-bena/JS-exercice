import ConsoleRenderer from "./ui/consoleRenderer.js"
import Game from './game/game.js'
import SaveManager from "./game/saveManager.js"

const game = new Game()
const consoleRenderer = new ConsoleRenderer()
const saveManager = new SaveManager()

while (!game.isGameOver && !game.isVictory) {
    // Dibujar partida
    consoleRenderer.render(game)

    // TODO Pedir input

    // TODO Gestionar input y convertirlo en acción
}

// TODO Imprimir resultado partida