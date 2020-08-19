process.env.TWITCH_CHANNEL = 'biruleibe'

import { mocked } from 'ts-jest/utils'
import { chat, channel } from '../../interfaces/chatbot'

import telegramCommand, { TELEGRAM_CHANNEL_URL } from './telegram'

const chatMocked = mocked(chat, true)
jest.mock('../../interfaces/chatbot')

describe('Telegram command', () => {
    it('should say to chat the URL', () => {
        telegramCommand('')

        expect(chatMocked.say).toBeCalledWith(channel, TELEGRAM_CHANNEL_URL)
    })

    // TODO: if say command fails?
})