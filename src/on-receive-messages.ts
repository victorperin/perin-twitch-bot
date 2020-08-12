import { curry } from "ramda"
import { Chat, PrivateMessages } from "twitch-js"

const onReceivePrivateMessages = curry(
    async (chat: Chat, channel: ChannelName, event: PrivateMessages): Promise<void> => {
        if (event.message === '!telegram')
            await chat.say(channel, 'https://t.me/perin_na_twitch')
    }
)

export type ChannelName = string
export default onReceivePrivateMessages