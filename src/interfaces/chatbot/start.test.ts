import { mocked } from 'ts-jest/utils'

import { chat } from './chat'
jest.mock('./chat')
const chatMocked = mocked(chat, true)

import registerListeners from './listeners'
jest.mock('./listeners')
const registerListenersMocked = mocked(registerListeners, true)

beforeEach(jest.resetAllMocks)

import startChat from './start'

it('should call listeners', async () => {
  await startChat()

  expect(registerListenersMocked).toBeCalledWith()
  expect(registerListenersMocked).toBeCalledTimes(1)
  expect(registerListenersMocked).toHaveBeenCalledBefore(chatMocked.connect)
})

it('should call connect', async () => {
  await startChat()

  expect(chatMocked.connect).toBeCalledWith()
  expect(chatMocked.connect).toBeCalledTimes(1)
})

it('should join TWITCH_CHANNE', async () => {
  await startChat()

  expect(chatMocked.join).toBeCalledWith(process.env.TWITCH_CHANNEL)
  expect(registerListenersMocked).toBeCalledTimes(1)
})
