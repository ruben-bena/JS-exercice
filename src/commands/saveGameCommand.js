import AbstractCommand from './abstractCommand.js'
import SaveManager from '../game/saveManager.js'

export default class SaveGameCommand extends AbstractCommand {
    fileName

    constructor(fileName) {
        super()
        this.fileName = fileName
    }

    execute(game) {
        const sm = new SaveManager()
        const filePath = "../saved-games/" + this.fileName
        sm.saveGame(game, filePath)
        console.log(`Partida guardada en ${this.fileName}`)
    }
}