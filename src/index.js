import ConsoleRenderer from "./ui/consoleRenderer.js"
import Game from './game/game.js'

const game = new Game()
const consoleRenderer = new ConsoleRenderer()

while (game.tiresLeft > 0) {
    consoleRenderer.render(game)
    game.tiresLeft--
    console.log(game.tiresLeft)
}