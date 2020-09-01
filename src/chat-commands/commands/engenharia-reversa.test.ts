import { mocked } from 'ts-jest/utils'
import { say } from '../../interfaces/chatbot'

jest.mock('../../config', () => ({
  twitch: {
    token: 'a-fake-token', //TODO: remove
  },
  playlists: { engenhariaReversa: 'playlist-fake-url' },
}))

const sayMocked = mocked(say)
jest.mock('../../interfaces/chatbot')

beforeEach(jest.restoreAllMocks)

import * as engRevesa from './engenharia-reversa'

it('should say the URL to chat', () => {
  engRevesa.command('')

  expect(sayMocked).toBeCalledWith('playlist-fake-url')
})

it('should throw an error if say fails', async () => {
  const error = new Error()
  sayMocked.mockRejectedValue(error)

  await expect(engRevesa.command('')).toReject()
})
