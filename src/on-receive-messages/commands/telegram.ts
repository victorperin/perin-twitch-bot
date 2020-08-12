import { Chat } from "twitch-js";

export const TELEGRAM_CHANNEL_URL = 'https://t.me/perin_na_twitch'

export default async (commandArguments: string[], chat: Chat, channel: string): Promise<void> => {
    await chat.say(channel, TELEGRAM_CHANNEL_URL)
}