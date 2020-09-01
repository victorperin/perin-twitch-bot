import { mocked } from 'ts-jest/utils'

import chatCommands from '../../chat-commands'
jest.mock('../../chat-commands')
const chatCommandsMocked = mocked(chatCommands)

import { chat } from './chat'
jest.mock('./chat')
const chatMocked = mocked(chat, true)

import listeners from './listeners'

it('should listen to private messages', () => {
  listeners()

  expect(chatMocked.on).toBeCalledWith('PRIVMSG', chatCommandsMocked)
  expect(chatMocked.on).toBeCalledTimes(1)
})
