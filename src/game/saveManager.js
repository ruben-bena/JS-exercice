import { promises as fs } from 'fs';

export default class SaveManager {
    
    async saveGame(game, filePath) {
        try {
            const saveData = JSON.stringify(game.toJSON(), null, 2)
            await fs.writeFile(filePath, saveData, 'utf-8')
        } catch (error) {
            console.error("Error en escriure les dades:", error)
        }
    }

    async loadGame(filePath) {
        try {
            const txtData = await fs.readFile(filePath, 'utf-8')
            const saveData = JSON.parse(txtData)
            return saveData
        } catch (error) {
            console.error("Error en llegir les dades:", error)
        }
    }
}