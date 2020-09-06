import { chat, channel, startup } from './chat'
import registerListeners from './listeners'
import config from '../../config'

const authenticationConfig = config.twitch

export default async (): Promise<void> => {
  await startup(authenticationConfig)
  await registerListeners()
  await chat.connect()
  await chat.join(channel)
}
