import TwitchJs, { ApiVersions, Chat } from 'twitch-js'

const CHANNEL = 'victor_perin'
const { TWITCH_TOKEN } = process.env



const twitchAuth = {
    username: CHANNEL,
    token: TWITCH_TOKEN,
    log: { level: 'error' }
}


const { api, chat } = new TwitchJs(twitchAuth)

chat.on(Chat.Events.ALL, () => { })

// chat.connect()
//     .then( () => {
//         chat.join(CHANNEL)
//     })
//     .then(async () => {
//         await chat.say(CHANNEL, 'biruleibe')
        
//         console.log('teste?!')
//     })

