import TwitchJs, { Chat, PrivateMessages } from 'twitch-js'
import { promisify } from 'util'
import config from '../../src/config'

import { start, stop } from '../../src/interfaces/chatbot'

const testBotOptions = {
  username: 'cavaalo',
  token: process.env.TWITCH_TEST_BOT_TOKEN,
  log: { level: 'error' },
}

const { chat: testBotChat } = new TwitchJs(testBotOptions)

beforeAll(async () => {
  await testBotChat.connect()
  await testBotChat.join('victor_perin_bot')
  await start()
})

afterEach(() => testBotChat.removeAllListeners())

afterAll(() => {
  testBotChat.disconnect()
  stop()
})

it.only('should respond to !telegram', async (done) => {
  const callback = (event: PrivateMessages) => {
    expect(event.message).toBe('https://t.me/perin_na_twitch')
    done()
  }

  testBotChat.on(Chat.Events.PRIVATE_MESSAGE, callback)
  await testBotChat.say(config.twitch.channel, '!telegram')
})

it('should respond to !engenhariareversa', async (done) => {
  const callback = (event: PrivateMessages) => {
    expect(event.message).toBe('https://www.twitch.tv/collections/ksI8HBWCIxbqVA')
    done()
  }

  testBotChat.on(Chat.Events.PRIVATE_MESSAGE, callback)
  await testBotChat.say(config.twitch.channel, '!engenhariareversa')
})
