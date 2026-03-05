import AbstractCommand from './abstractCommand.js'
import SaveManager from '../game/saveManager.js'

export default class LoadGameCommand extends AbstractCommand {
    fileName
    
    constructor(fileName) {
        super()
        this.fileName = fileName
    }

    async execute(game) {
        const sm = new SaveManager()
        const filePath = "../saved-games/" + this.fileName
        const data = await sm.loadGame(filePath)
        game.fromJSON(data)
        console.log(`Partida cargada desde ${this.fileName}`)
    }
}