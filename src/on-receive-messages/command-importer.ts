import telegramCommand, { name as telegramCommandName } from './commands/telegram'
import * as engReversa from './commands/engenharia-reversa'

type CommandFunction = (argument: string) => Promise<void>

const commandImporter = (): Map<string, CommandFunction> => {
  const commands = new Map()

  //TODO: vai ser dinamico
  commands.set(telegramCommandName, telegramCommand)
  commands.set(engReversa.default, engReversa.name)

  return commands
}

export default commandImporter
