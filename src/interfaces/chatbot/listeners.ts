import { Chat } from 'twitch-js'
import { chat } from './chat'
import chatCommands from '../../chat-commands'

export default (): void => {
  chat.on(Chat.Events.PRIVATE_MESSAGE, chatCommands)
}
