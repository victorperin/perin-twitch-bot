import { chat, channel } from '../../interfaces/chatbot'
import config from '../../config'

const telegramCommand = async (commandArguments: string): Promise<void> => {
  await chat.say(channel, config.playlists.engenhariaReversa)
}

export const name = 'engenhariareversa'

export default telegramCommand
