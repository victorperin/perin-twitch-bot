process.env.TWITCH_CHANNEL = 'biruleibe'

import { mocked } from 'ts-jest/utils'
import { chat, channel } from '../../interfaces/chatbot'

const chatMocked = mocked(chat, true)
jest.mock('../../interfaces/chatbot')

beforeEach(jest.restoreAllMocks)

import telegramCommand, { TELEGRAM_CHANNEL_URL } from './telegram'

describe('Telegram command', () => {
  it('should say to chat the URL', () => {
    telegramCommand('')

    expect(chatMocked.say).toBeCalledWith(channel, TELEGRAM_CHANNEL_URL)
  })

  it('should throw an error if say fails', async () => {
    const error = new Error()
    chatMocked.say.mockRejectedValue(error)

    await expect(telegramCommand('')).toReject()
  })
})
