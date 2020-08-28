import { mocked } from 'ts-jest/utils'
import { chat, channel } from '../../interfaces/chatbot'
import config from '../../config'

const chatMocked = mocked(chat, true)
jest.mock('../../interfaces/chatbot')

beforeEach(jest.restoreAllMocks)

import * as engRevesa from './engenharia-reversa'

it('should say the URL to chat', () => {
  engRevesa.command('')

  expect(chatMocked.say).toBeCalledWith(channel, config.playlists.engenhariaReversa)
})

it('should throw an error if say fails', async () => {
  const error = new Error()
  chatMocked.say.mockRejectedValue(error)

  await expect(engRevesa.command('')).toReject()
})
