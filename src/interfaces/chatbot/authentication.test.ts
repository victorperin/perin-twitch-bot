import { mocked } from 'ts-jest/utils'
import { createMock } from 'ts-auto-mock'
import { ClientCredentialsAuthProvider } from 'twitch-auth'

const AccessTokenMock = {
  accessToken: 'tokenMock',
}

const getAccessTokenMock = jest.fn().mockResolvedValue(AccessTokenMock)
const refreshMock = jest.fn().mockResolvedValue(AccessTokenMock)
const ClientCredentialsAuthProviderMocked = mocked(ClientCredentialsAuthProvider, true)
jest.mock('twitch-auth', () => ({
  ClientCredentialsAuthProvider: jest.fn().mockImplementation(() => ({
    getAccessToken: getAccessTokenMock,
    refresh: refreshMock,
  })),
}))

import authentication, { Options } from './authentication'

it('should return username property', async () => {
  const options = createMock<Options>({ username: 'biruleibe' })
  const result = await authentication(options)

  expect(result.username).toBe('biruleibe')
})

it('should return an access token', async () => {
  getAccessTokenMock.mockResolvedValue({ accessToken: 'sgreyluy' })

  const options = createMock<Options>({})
  const result = await authentication(options)

  expect(getAccessTokenMock).toBeCalledTimes(1)
  expect(getAccessTokenMock).toBeCalledWith()
  expect(result.token).toBe('sgreyluy')
})

it('should return refresh function as onAuthenticationFailure', async () => {
  const options = createMock<Options>({})

  const result = await authentication(options)
  const authenticationFalureResult = await result.onAuthenticationFailure()

  expect(refreshMock).toBeCalledTimes(1)
  expect(authenticationFalureResult).toBe('tokenMock')
})

it('should call ClientCredentialsAuthProvider with clientd and secret', async () => {
  const options = createMock<Options>({ clientId: 'CLIENT_ID_MOCKED', secret: 'SECRET_MOCKED' })
  await authentication(options)

  expect(ClientCredentialsAuthProviderMocked).toBeCalledWith('CLIENT_ID_MOCKED', 'SECRET_MOCKED')
})

it('should reject if token is not received', async () => {
  const error = new Error('Mocked Error')
  getAccessTokenMock.mockRejectedValue(error)

  const options = createMock<Options>({})

  const resultPromise = authentication(options)

  await expect(resultPromise).toReject()
  await resultPromise.catch((errorResult) => expect(errorResult).toBe(error))
})
