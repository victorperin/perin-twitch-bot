import { chat, channel } from '../../interfaces/chatbot'

export const TELEGRAM_CHANNEL_URL = 'https://t.me/perin_na_twitch'

const telegramCommand = async (commandArguments: string): Promise<void> => {
    await chat.say(channel, TELEGRAM_CHANNEL_URL)
}

export const name = 'telegram'

export default telegramCommand