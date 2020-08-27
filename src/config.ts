// this file serves only to import environment variables and constants to other files.
// do not read environment variables outside this file

const { TWITCH_BOT_TOKEN, TWITCH_CHANNEL } = process.env

interface TwitchConfig {
  channel: string
  token: string
}

interface TelegramConfig {
  channel: string
}

interface Config {
  twitch: TwitchConfig
  telegram: TelegramConfig
}

const config: Config = {
  twitch: {
    channel: TWITCH_CHANNEL || 'victor_perin_bot',
    token: TWITCH_BOT_TOKEN || '',
  },
  telegram: {
    channel: 'https://t.me/perin_na_twitch',
  },
}

export default config
