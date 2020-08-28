import TwitchJs from 'twitch-js'
import config from '../../config'

const twitchAuth = {
  username: 'victor_perin_bot',
  token: config.twitch.token,
  log: { level: 'error' },
}

export const { chat } = new TwitchJs(twitchAuth)

export const channel = config.twitch.channel
export const say = (text: string): Promise<void> => chat.say(channel, text)
