import { mocked } from 'ts-jest/utils'

import onReceivePrivateMessages from '../../on-receive-messages'
jest.mock('../../on-receive-messages')
const onReceivePrivateMessagesMocked = mocked(onReceivePrivateMessages)

import { chat } from './chat'
jest.mock('./chat')
const chatMocked = mocked(chat, true)

import listeners from './listeners'

it('should listen to private messages', () => {
  listeners()

  expect(chatMocked.on).toBeCalledWith('PRIVMSG', onReceivePrivateMessagesMocked)
  expect(chatMocked.on).toBeCalledTimes(1)
})
