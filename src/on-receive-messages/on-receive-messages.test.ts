import { PrivateMessages } from 'twitch-js'
import { createMock } from 'ts-auto-mock'
import crypto from 'crypto'

const commandsMock = new Map()
jest.mock('./command-importer', () => () => commandsMock)

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

it('should do execute default action if no matches are found', async () => {
  const event = createMock<PrivateMessages>({ message: '!teste' })

  const defaultCommandMock = jest.fn()
  commandsMock.set('default', defaultCommandMock)

  await onReceiveMessages(event)

  expect(defaultCommandMock).toBeCalledTimes(1)
})

it('should do execute a command if matched', async () => {
  const event = createMock<PrivateMessages>({ message: '!biruleibe' })

  const biruleibeCommandMock = jest.fn()
  commandsMock.set('biruleibe', biruleibeCommandMock)

  await onReceiveMessages(event)

  expect(biruleibeCommandMock).toBeCalledTimes(1)
})

it('should do execute a command when matches lowercase', async () => {
  const event = createMock<PrivateMessages>({ message: '!BiRuLeIbE' })

  const biruleibeCommandMock = jest.fn()
  commandsMock.set('biruleibe', biruleibeCommandMock)

  await onReceiveMessages(event)

  expect(biruleibeCommandMock).toBeCalledTimes(1)
})
