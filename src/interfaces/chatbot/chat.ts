import TwitchJs, { Chat } from 'twitch-js'
import config, { TwitchConfig } from '../../config'
import authentication from './authentication'

export let chat: Chat = new Chat({})

export const startup = async (authenticationConfig: TwitchConfig): Promise<void> => {
  const twitchAuth = await authentication(authenticationConfig)

  console.log(twitchAuth)

  const twitchJsConfig = {
    ...twitchAuth,
    clientId: authenticationConfig.clientId,
    // log: { level: 'error' },
  }

  chat = new TwitchJs(twitchJsConfig).chat
}

export const channel = config.twitch.channel
export const say = (text: string): Promise<void> => chat.say(channel, text)
