import { mocked } from 'ts-jest/utils'

import { chat } from './chat'
jest.mock('./chat')
const chatMocked = mocked(chat, true)

beforeEach(jest.resetAllMocks)

import stop from './stop'

it('should removeAllListeners', () => {
    stop()

    expect(chatMocked.removeAllListeners).toBeCalledWith()
    expect(chatMocked.removeAllListeners).toBeCalledTimes(1)
})

it('should disconnect', () => {
    stop()

    expect(chatMocked.disconnect).toBeCalledWith()
    expect(chatMocked.disconnect).toBeCalledTimes(1)
    expect(chatMocked.disconnect).toHaveBeenCalledAfter(chatMocked.removeAllListeners);
})