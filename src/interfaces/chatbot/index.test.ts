import { chat } from '.'
import { Chat } from 'twitch-js'

describe('bot singleton', () => {
    describe('chat', () => {
        it('should aways be the same instance of chat element', async () => {
            const oneChatInstance = await import('.').then(x => x.chat)
            const otherChatInstance = await import('.').then(x => x.chat)

            expect(chat).toBe(oneChatInstance)
            expect(chat).toBe(otherChatInstance)
        })

        it('should be an Chat object', () => {
            expect(chat).toBeInstanceOf(Chat)
        })
    })
    
})