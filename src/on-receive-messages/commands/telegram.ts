import { ChannelName } from "..";
import { Chat } from "twitch-js";

export default async (commandArguments: string[], chat: Chat, channel: ChannelName): Promise<void> => {
    await chat.say(channel, 'https://t.me/perin_na_twitch')
}