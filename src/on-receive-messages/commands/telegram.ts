import { Chat } from "twitch-js";

export default async (commandArguments: string[], chat: Chat, channel: string): Promise<void> => {
    await chat.say(channel, 'https://t.me/perin_na_twitch')
}