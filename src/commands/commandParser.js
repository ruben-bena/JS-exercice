export default class CommandParser {
    parse(input) {
        normalizedInput = input.trim().toLowerCase()
        if (normalizedInput.length() === 0) {
            return null
        }

        if (normalizedInput === 'ajuda' || normalizedInput === 'help') {
            return HelpCommand();
        }

        
    }
}