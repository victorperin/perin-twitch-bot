import { PrivateMessages } from 'twitch-js'
import { createMock } from 'ts-auto-mock'
import crypto from 'crypto'

import onReceiveMessages from '.'

it('should do nothing if message does not start with !', () => {
  const substringSpy = jest.spyOn(String.prototype, 'substring')
  const event = createMock<PrivateMessages>({ message: 'biruleibe' })

  const response = onReceiveMessages(event)

  expect(response).toStrictEqual(Promise.resolve(undefined))
  expect(substringSpy).toBeCalledTimes(0)

  substringSpy.mockRestore()
})

it('should do nothing if message is bigger than 500 chars', async () => {
  const messageWithMoreThan500Chars = '!' + crypto.randomBytes(1000)

  const substringSpy = jest.spyOn(String.prototype, 'substring')
  const event = createMock<PrivateMessages>({ message: messageWithMoreThan500Chars })

  await onReceiveMessages(event)

  expect(substringSpy).toBeCalledTimes(0)

  substringSpy.mockRestore()
})

it.todo('should do execute default function if no matches are found')
