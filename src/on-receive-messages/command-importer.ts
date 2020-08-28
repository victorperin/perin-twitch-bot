import * as telegram from './commands/telegram'
import * as engReversa from './commands/engenharia-reversa'

type CommandFunction = (argument: string) => Promise<void>

const commandImporter = (): Map<string, CommandFunction> => {
  const commands = new Map()

  //TODO: vai ser dinamico
  commands.set(telegram.name, telegram.command)
  commands.set(engReversa.name, engReversa.command)

  return commands
}

export default commandImporter
