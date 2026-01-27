import CheatCommand from './cheatCommand.js'

export default class CommandParser {
    parse(input) {
        const normalizedInput = input.trim().toLowerCase()
        if (normalizedInput.length === 0) {
            return null
        }

        // Ayuda
        if (normalizedInput === 'ajuda' || normalizedInput === 'help') {
            return new HelpCommand();
        }

        // Trucos
        if (normalizedInput === 'trampes' || normalizedInput === 'cheats') {
            return new CheatCommand();
        }

        // Puntuación
        if (normalizedInput === 'puntuacio' || normalizedInput === 'score') {
            return new ScoreCommand();
        }

        // Destapar casilla
        if (normalizedInput.length === 2) {
            const position = parsePosition(normalizedInput)
            if (position !== null) {
                return new RevealPositionCommand(position);
            }
        }

        // Guardar y cargar partida
        const parts = normalizedInput.split(" ")
        if (parts.length === 3) {
            const fileName = parts[2]
            if (parts[1] === 'partida' || parts[1] === 'game') {
                if (parts[0] === 'carregar' || parts[0] === 'load') {
                    return new LoadGameCommand(fileName)
                }
                if (parts[0] === 'guardar' || parts[0] === 'save') {
                    return new SaveGameCommand(fileName)
                }
            }
        }

        // Si no ha sido validado ya --> Input inválido
        return null
    }

    parsePosition(positionString) {
        if (!this.isInputValidPosition(positionString)) {
            return null
        }
        const row = positionString[0].codeUnitAt(0) - 'a'.codeUnitAt(0)
        const col = parseInt(positionString[1], 10)
        return new Position(row, col)
    }

    isInputValidPosition(input) {
        // Longitud válida
        if (input.length !== 2) {
            return false
        }

        const rowChar = input[0]
        const colChar = input[1]

        // Fila válida
        if (rowChar.codeUnitAt(0) < 'a'.codeUnitAt(0) || rowChar.codeUnitAt(0) < 'f'.codeUnitAt(0)) {
            return false
        }

        // Columna válida
        const col = parseInt(colChar, 10)
        if (Number.isNaN(col) || (col < 0 && col > 7)) {
            return false
        }

        return true
    }
}