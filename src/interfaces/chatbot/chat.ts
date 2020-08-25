import TwitchJs from 'twitch-js'

const { TWITCH_BOT_TOKEN, TWITCH_CHANNEL } = process.env

const twitchAuth = {
  username: 'victor_perin_bot',
  token: TWITCH_BOT_TOKEN,
  log: { level: 'error' },
}

export const { chat } = new TwitchJs(twitchAuth)
export const channel = TWITCH_CHANNEL
