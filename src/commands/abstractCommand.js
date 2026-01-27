export default class Command {
    execute() {
        throw new Error('Abstract method from abstract class')
    }
}