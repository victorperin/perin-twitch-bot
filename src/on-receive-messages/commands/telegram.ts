import { chat, channel } from '../../interfaces/chatbot'
import { commands } from '../'

export const TELEGRAM_CHANNEL_URL = 'https://t.me/perin_na_twitch'

const telegramCommand = async (commandArguments: string): Promise<void> => {
    await chat.say(channel, TELEGRAM_CHANNEL_URL)
}

commands.set('telegram', telegramCommand)

export default telegramCommand