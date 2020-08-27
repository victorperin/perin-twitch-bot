import TwitchJs, { Chat } from 'twitch-js'
import { promisify } from 'util'
import config from '../../src/config'

const sleep = promisify(setTimeout)

const testBotOptions = {
  username: 'cavaalo',
  token: config.twitch.token,
  log: { level: 'error' },
}

import { start, stop } from '../../src/interfaces/chatbot'

it('should respond to !telegram', async () => {
  const { chat: testBotChat } = new TwitchJs(testBotOptions)

  await testBotChat.connect()
  await testBotChat.join(config.twitch.channel)

  await testBotChat.on(Chat.Events.PRIVATE_MESSAGE, (event) => {
    expect(event.message).toBe('https://t.me/perin_na_twitch')
  })

  await start()

  await sleep(500)

  await testBotChat.say(config.twitch.channel, '!telegram')

  await sleep(500)

  testBotChat.disconnect()
  stop()
  expect.hasAssertions()
})
