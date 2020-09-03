import TwitchJs, { Chat, TwitchJsOptions } from 'twitch-js'
import config from '../../config'
import authentication from './authentication'

const authenticationConfig = config.twitch

export let chat: Chat = new Chat({})

export const startup = async (): Promise<void> => {
  const twitchAuth = await authentication(authenticationConfig)

  const twitchJsConfig = {
    ...twitchAuth,
    log: { level: 'error' },
  }

  chat = new TwitchJs(twitchJsConfig).chat
}

export const channel = config.twitch.channel
export const say = (text: string): Promise<void> => chat.say(channel, text)
