const commands = new Map()

import telegramCommand, { name as telegramCommandName } from './commands/telegram'

const commandImporter = (): Map<string, Function> => {
    const commands = new Map()

    //TODO: vai ser dinamico
    commands.set(telegramCommandName, telegramCommand)

    return commands
}



export default commandImporter