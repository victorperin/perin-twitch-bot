// this file serves only to import environment variables and constants to other files.
// do not read environment variables outside this file

const { TWITCH_USERNAME, TWITCH_CHANNEL, TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = process.env

interface TwitchConfig {
  username: string
  channel: string
  clientId: string
  secret: string
}

interface TelegramConfig {
  channel: string
}

interface PlaylistsConfig {
  engenhariaReversa: string
}

interface Config {
  twitch: TwitchConfig
  telegram: TelegramConfig
  playlists: PlaylistsConfig
}

const config: Config = {
  twitch: {
    username: TWITCH_USERNAME || 'victor_perin_bot',
    channel: TWITCH_CHANNEL || 'victor_perin_bot',
    clientId: TWITCH_CLIENT_ID || '',
    secret: TWITCH_CLIENT_SECRET || '',
  },
  telegram: {
    channel: 'https://t.me/perin_na_twitch',
  },
  playlists: {
    engenhariaReversa: 'https://www.twitch.tv/collections/ksI8HBWCIxbqVA',
  },
}

export default config
