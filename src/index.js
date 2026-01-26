import ConsoleRenderer from "./ui/consoleRenderer.js"
import Game from './game/game.js'
import SaveManager from "./game/saveManager.js"

const game = new Game()
const consoleRenderer = new ConsoleRenderer()
const saveManager = new SaveManager()

while (game.triesLeft > 0) {
    consoleRenderer.render(game)
    game.triesLeft--
    console.log(game.triesLeft)
}