import telegramCommand, { TELEGRAM_CHANNEL_URL } from './telegram'
import { Chat } from 'twitch-js'

describe('Telegram command', () => {
    it('should say to chat the URL', () => {
        const chat = new Chat({})
        chat.say = jest.fn()

        const channel = 'biruleibe'
        telegramCommand([], chat, channel)

        expect(chat.say).toBeCalledWith(channel, TELEGRAM_CHANNEL_URL)
    })
})