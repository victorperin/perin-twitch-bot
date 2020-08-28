import { mocked } from 'ts-jest/utils'
import { chat, channel } from '../../interfaces/chatbot'
import config from '../../config'

const chatMocked = mocked(chat, true)
jest.mock('../../interfaces/chatbot')

beforeEach(jest.restoreAllMocks)

import * as telegram from './telegram'

describe('Telegram command', () => {
  it('should say to chat the URL', () => {
    telegram.command('')

    expect(chatMocked.say).toBeCalledWith(channel, config.telegram.channel)
  })

  it('should throw an error if say fails', async () => {
    const error = new Error()
    chatMocked.say.mockRejectedValue(error)

    await expect(telegram.command('')).toReject()
  })
})
