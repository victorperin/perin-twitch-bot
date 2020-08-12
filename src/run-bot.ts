import TwitchJs, { Chat } from 'twitch-js'
import onReceivePrivateMessages from './on-receive-messages'

const { TWITCH_BOT_TOKEN } = process.env

const twitchAuth = {
    username: 'victor_perin_bot',
    token: TWITCH_BOT_TOKEN,
    log: { level: 'error' },
}

const { chat } = new TwitchJs(twitchAuth)

const runBot = async (channel: string): Promise<void> => {
    chat.on(Chat.Events.PRIVATE_MESSAGE, onReceivePrivateMessages(chat, channel))

    await chat.connect()
    await chat.join(channel)
}

export const disconnect = (): void => {
    chat.removeAllListeners()
    chat.disconnect()
}
export default runBot