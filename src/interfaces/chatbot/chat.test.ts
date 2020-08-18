import * as chatbot from './chat'
import { Chat } from 'twitch-js'
import { mocked } from 'ts-jest/utils'

jest.mock('.')
const chatMocked = mocked(chatbot, true)

beforeEach(jest.resetAllMocks)

describe('chatbot', () => {
    describe('chat', () => {
        it('should aways be the same instance of chat element using node module cache', async () => {
            const equalChatInstance = await import('./chat').then(x => x.chat)

            jest.resetModuleRegistry()
            const differentChatInstance = await import('./chat').then(x => x.chat)

            expect(chatbot.chat).toStrictEqual(equalChatInstance)
            expect(chatbot.chat).not.toStrictEqual(differentChatInstance)
        })

        it('should be an Chat object', () => {
            expect(chatbot.chat).toBeInstanceOf(Chat)
        })
    })
    
})