class Command {
    constructor() {
        throw new Error('Abstract class')
    }
    
    execute() {
        throw new Error('Abstract method from abstract class')
    }
}