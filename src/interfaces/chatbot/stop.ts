import { chat } from './chat'

export default (): void => {
    chat.removeAllListeners()
    chat.disconnect()
}