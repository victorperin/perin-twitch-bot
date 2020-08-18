import { chat, channel } from './chat'
import registerListeners from './listeners'

export default async (): Promise<void> => {
    await registerListeners()
    await chat.connect()
    await chat.join(channel)
}