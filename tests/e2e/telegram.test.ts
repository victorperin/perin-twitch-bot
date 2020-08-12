import TwitchJs, { Chat } from 'twitch-js'
import { promisify } from 'util'

const sleep = promisify(setTimeout)

const {
    TWITCH_TEST_BOT_TOKEN,
} = process.env

const testBotOptions = {
    username: 'cavaalo',
    token: TWITCH_TEST_BOT_TOKEN,
    log: { level: 'error' }
}

const BOT_CHANNEL = 'victor_perin_bot'
process.env.TWITCH_CHANNEL = BOT_CHANNEL

import runBot, { disconnect } from '../../src/run-bot'

it('should respond to !telegram', async () => {
    const { chat: testBotChat } = new TwitchJs(testBotOptions)

    await testBotChat.connect()
    await testBotChat.join(BOT_CHANNEL)

    await testBotChat.on(Chat.Events.PRIVATE_MESSAGE, (event) => {
        expect(event.message).toBe('https://t.me/perin_na_twitch')
    })

    await runBot()

    await sleep(500)

    await testBotChat.say(BOT_CHANNEL, '!telegram')
    
    await sleep(500)

    testBotChat.disconnect()
    disconnect()
    expect.hasAssertions()

})