import { chat, channel } from '../../bot'

export const TELEGRAM_CHANNEL_URL = 'https://t.me/perin_na_twitch'

export default async (commandArguments: string): Promise<void> => {
    await chat.say(channel, TELEGRAM_CHANNEL_URL)
}

export const commandName = 'telegram'