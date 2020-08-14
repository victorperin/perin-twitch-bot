import TwitchJs from "twitch-js";
import registerListeners from './listeners'

const {
    TWITCH_BOT_TOKEN,
    TWITCH_CHANNEL,
} = process.env

const twitchAuth = {
    username: 'victor_perin_bot',
    token: TWITCH_BOT_TOKEN,
    log: { level: 'error' },
}

export const { chat } = new TwitchJs(twitchAuth)
export const channel = TWITCH_CHANNEL


export const start = async (): Promise<void> => {
    await registerListeners()
    await chat.connect()
    await chat.join(channel)
}

export const stop = (): void => {
    chat.removeAllListeners()
    chat.disconnect()
}