/* eslint-disable @typescript-eslint/no-var-requires */
import { mocked } from 'ts-jest/utils'
import { createMock } from 'ts-auto-mock'

import fs, { Dirent } from 'fs'
import { CommandFunction } from './command-importer'
jest.mock('fs')
const readDirSyncMocked = mocked(fs.readdirSync)

const importCommandImporter = () => {
  let commandImporter = () => Promise.resolve([])
  jest.isolateModules(() => (commandImporter = require('./command-importer').default))

  return commandImporter
}

const mockCommandsFolder = (fileNames: string[]) =>
  readDirSyncMocked.mockReturnValue(
    fileNames.map((fileName) => createMock<Dirent>({ name: fileName })),
  )

const mockVirtualCommandFile = (filename: string, commandName: string) =>
  jest.mock(`./commands/${filename}`, () => ({ name: commandName, command: () => null }), {
    virtual: true,
  })

it('should import .ts modules', async () => {
  mockVirtualCommandFile('a.ts', 'a')
  mockCommandsFolder(['a.ts'])

  const commandImporter = importCommandImporter()
  const commands = await commandImporter()
  const keys = [...commands.keys()]

  expect(keys).toIncludeSameMembers(['a'])
})

it('should import .js modules', async () => {
  mockVirtualCommandFile('b.js', 'b')
  mockCommandsFolder(['b.js'])

  const commandImporter = importCommandImporter()
  const commands = await commandImporter()
  const keys = [...commands.keys()]

  expect(keys).toIncludeSameMembers(['b'])
})

it('should ignore .d.ts files', async () => {
  mockCommandsFolder(['c.d.ts'])

  const commandImporter = importCommandImporter()
  const commands = await commandImporter()
  const keys = [...commands.keys()]

  expect(keys).toIncludeSameMembers([])
})

it('should ignore .test.ts files', async () => {
  mockCommandsFolder(['d.test.ts'])

  const commandImporter = importCommandImporter()
  const commands = await commandImporter()
  const keys = [...commands.keys()]

  expect(keys).toIncludeSameMembers([])
})

it('should import all modules from commands folder', async () => {
  mockVirtualCommandFile('a.ts', 'a')
  mockVirtualCommandFile('b.ts', 'b')
  mockVirtualCommandFile('c.ts', 'c')
  mockCommandsFolder(['a.ts', 'b.ts', 'c.ts'])

  const commandImporter = importCommandImporter()
  const commands = await commandImporter()
  const keys = [...commands.keys()]

  expect(keys).toIncludeSameMembers(['a', 'b', 'c'])
})

it('should reject if module do not exist', async () => {
  mockCommandsFolder(['inexistentFile.ts'])

  const commandImporter = importCommandImporter()
  await expect(commandImporter()).toReject()
})
