import { chat, channel, startup } from './chat'
import registerListeners from './listeners'

export default async (): Promise<void> => {
  await startup()
  await registerListeners()
  await chat.connect()
  await chat.join(channel)
}
