import { Chat } from 'twitch-js'
import onReceivePrivateMessages from './on-receive-messages'
import { channel, chat } from './bot'

const runBot = async (): Promise<void> => {
    chat.on(Chat.Events.PRIVATE_MESSAGE, onReceivePrivateMessages(chat, channel))

    await chat.connect()
    await chat.join(channel)
}

export const disconnect = (): void => {
    chat.removeAllListeners()
    chat.disconnect()
}
export default runBot