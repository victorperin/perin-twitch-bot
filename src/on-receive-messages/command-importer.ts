import { readdirSync } from 'fs'

// console.log(readdirSync(''))

const TEST_OR_TYPE_FILE_REGEX = /\.(d|test)\.(ts|js)$/i

const COMMANDS_FOLDER_PATH = `${__dirname}/commands`
const filesOnCommandsFolder = readdirSync(COMMANDS_FOLDER_PATH, { withFileTypes: true })

const commandsFilesFilter = (fileName: string) => !TEST_OR_TYPE_FILE_REGEX.test(fileName)
const commandsFiles = filesOnCommandsFolder.map((file) => file.name).filter(commandsFilesFilter)

export type CommandFunction = (argument: string) => Promise<void>
type Command = { name: string; command: CommandFunction }

const importFilesAndAddToMap = (commands: Map<string, CommandFunction>) => async (
  fileName: string,
) => {
  const command: Command = await import(`./commands/${fileName}`)
  commands.set(command.name.toLowerCase(), command.command)
}

const commandImporter = async (): Promise<Map<string, CommandFunction>> => {
  const commands = new Map()

  const importPromises = commandsFiles.map(importFilesAndAddToMap(commands))

  await Promise.all(importPromises)

  return commands
}

export default commandImporter
