import child_process from 'child_process'
import tsconfig from './tsconfig'

const isWindows = process.platform.startsWith('win')
const typeDefsGlob = 'src/graphql/typeDefs/**/*.graphql'
const children = []

export async function build(task) {
  await task.serial(['ts', 'typeDefs'])
}

/**
 * Compile all ts files inside src using Typescript
 */
export async function ts(task, opts) {
  if (opts.src) {
    await task
      .source(opts.src)
      .typescript(tsconfig.compilerOptions)
      .target('lib')
  } else {
    run('tsc')
  }
}

export async function gqlToTs() {
  const PORT = process.env.PORT || 5000

  run(`gql-gen --url http://localhost:${PORT} --template typescript --out ./src/graphql/generated/ "./${typeDefsGlob}"`)
}

/**
 * Move the graphql files to lib
 */
export async function typeDefs(task, opts) {
  await task.source(opts.src || typeDefsGlob).target('lib/graphql/typeDefs')
}

/**
 * Spawns the nodemon server
 */
export async function nodemon() {
  spawn('nodemon lib/index.js -w lib -e js,graphql')
}

export default async function(task) {
  await task.start('build')
  await task.watch('src/**/*.ts', 'ts')
  await task.watch(typeDefsGlob, 'typeDefs')
  await task.start('nodemon')
}

process.on('exit', () => {
  children.forEach(child => {
    child.kill()
  })
})

process.on('SIGINT', exit) // catch ctrl-c

process.on('SIGTERM', exit) // catch kill

function exit () {
  process.exit()
}

function run(command) {
  child_process.execSync(command, { stdio: 'inherit' })
}

function spawn(command) {
  const [bin, ...args] = command.split(' ')

  children.push(
    child_process.spawn(
      isWindows ? bin + '.cmd' : bin,
      args,
      { stdio: 'inherit' }
    )
  )
}
