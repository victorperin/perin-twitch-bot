import { say } from '../../interfaces/chatbot'
import config from '../../config'

export const command = async (commandArguments: string): Promise<void> => {
  await say(config.playlists.engenhariaReversa)
}

export const name = 'engenhariareversa'
