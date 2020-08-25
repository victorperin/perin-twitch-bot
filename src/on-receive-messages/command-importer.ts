const commands = new Map()

import telegramCommand, { name as telegramCommandName } from './commands/telegram'

type CommandFunction = (a: string) => Promise<void>

const commandImporter = (): Map<string, CommandFunction> => {
  const commands = new Map()

  //TODO: vai ser dinamico
  commands.set(telegramCommandName, telegramCommand)

  return commands
}

export default commandImporter
