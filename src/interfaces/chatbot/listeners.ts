import { Chat } from 'twitch-js'
import { chat } from './chat'
import onReceivePrivateMessages from '../../on-receive-messages'

export default () => {
    chat.on(Chat.Events.PRIVATE_MESSAGE, onReceivePrivateMessages)
}