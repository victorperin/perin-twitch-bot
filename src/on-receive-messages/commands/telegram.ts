import { chat, channel } from '../../interfaces/chatbot'
import config from '../../config'

const telegramCommand = async (commandArguments: string): Promise<void> => {
  await chat.say(channel, config.telegram.channel)
}

export const name = 'telegram'

export default telegramCommand
