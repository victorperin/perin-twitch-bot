import { chat, channel } from '../../interfaces/chatbot'
import config from '../../config'

export const command = async (commandArguments: string): Promise<void> => {
  await chat.say(channel, config.telegram.channel)
}

export const name = 'telegram'
