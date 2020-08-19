import { PrivateMessages } from "twitch-js"

import telegramCommand from './commands/telegram'

const commands = {
    'telegram': telegramCommand,
    default: (args: string) => {},
}

const onReceivePrivateMessages = async (event: PrivateMessages): Promise<void> => {
    if (
        !event.message.startsWith('!') ||
        event.message.length > 500
    ) return

    const [ command ] = event.message.substring(1).split(' ', 1)
    const argumentsAsString = event.message.substr(command.length + 2)

    return (commands[command] || commands.default)?.(argumentsAsString)
}

export default onReceivePrivateMessages