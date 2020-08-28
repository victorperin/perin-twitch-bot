import { mocked } from 'ts-jest/utils'

import commandImporter from './command-importer'

import telegramCommand, { name as telegramCommandName } from './commands/telegram'
jest.mock('./commands/telegram')
const mockedTelegramCommand = mocked(telegramCommand)

jest.mock('./commands/engenharia-reversa')

it('should return an map with all commands', () => {
  const response = commandImporter()

  expect(response).toBeInstanceOf(Map)
})

it('should should contain telegram command named by command itself', () => {
  const commands = commandImporter()
  const response = commands.get(telegramCommandName)

  expect(response).toBe(mockedTelegramCommand)
})

it.todo('should import all modules from commands folder')
it.todo('should trow an error if any import fail (when we import dinamically)')
