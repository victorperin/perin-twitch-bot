import { PrivateMessages } from "twitch-js"

import telegramCommand from './commands/telegram'

const commands = {
    'telegram': telegramCommand,
}

const EVENT_REGEX_STRUCTURE = /^!(\w+)(( \w+)*)$/i

const onReceivePrivateMessages = async (event: PrivateMessages): Promise<void> => {
    if (!event.message.startsWith('!')) return

    const [_, command, commandsArgumentsAsOneString] = event.message.match(EVENT_REGEX_STRUCTURE)
    const commandArguments = commandsArgumentsAsOneString.trim().split(' ')

    return commands[command]?.(commandArguments)
}

export default onReceivePrivateMessages