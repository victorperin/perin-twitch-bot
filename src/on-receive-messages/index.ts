import { PrivateMessages } from 'twitch-js'

import commandImporter from './command-importer'

const commandsPromise = commandImporter()

const onReceivePrivateMessages = async (event: PrivateMessages): Promise<void> => {
  if (!event.message.startsWith('!') || event.message.length > 500) return

  const [command] = event.message.substring(1).split(' ', 1)
  const argumentsAsString = event.message.substr(command.length + 2)

  const commands = await commandsPromise

  const functionToBeExecuted = commands.get(command) || commands.get('default')

  return functionToBeExecuted?.(argumentsAsString)
}

export default onReceivePrivateMessages
