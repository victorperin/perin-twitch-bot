const TwitchJs = require('twitch-js').default


const CHANNEL = 'victor_perin'
const { TWITCH_TOKEN } = process.env



const twitchAuth = {
    username: CHANNEL,
    token: TWITCH_TOKEN,
    log: { level: 'error' }
}


const { api, chat } = new TwitchJs(twitchAuth)

chat.on('PRIVMSG', ({username, message, isSelf}) => {
    if(isSelf) return 0

    if(message === '!telegram')
        chat.say(CHANNEL, 'https://t.me/perin_na_twitch')
    
})

chat.connect()
    .then( () => {
        chat.join(CHANNEL)
    })
    // .then(async () => {
    //     await chat.say(CHANNEL, 'biruleibe')
        
    //     console.log('teste?!')
    // })

