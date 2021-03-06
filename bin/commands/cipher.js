const readline = require('readline')
const chalk = require('chalk')
const log = require('../utils/log')
const alienigma = require('../../src/alienigma')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: Boolean(process.stdin.isTTY)
})

let cmdArgs
const lineBuffer = []

const onReceiveLine = (line) => lineBuffer.push(line)
const onInputStreamClose = () => {
  if (process.stdin.isTTY) { log() }

  const runnerOptions = { obfuscate: cmdArgs.obfuscation }
  const encodedLines = lineBuffer.map((line) => {
    let encodedLine = ''

    try {
      encodedLine = alienigma.run(line, runnerOptions)
    } catch (error) {
      log(`\n${chalk.red(`Oops. An error occurred: \n\n${error.message}`)}`)
      process.exit(1)
    }

    return encodedLine
  })

  if (process.stdout.isTTY) {
    log(`${chalk.yellow(`Shhh! Here's your ${cmdArgs.obfuscation ? 'ciphered and obfuscated' : 'ciphered'} message:`)}\n`)
  }

  log(encodedLines.join('\n'))
}

/**
 * Runs cipher CLI command
 *
 * @param  {Object} cmd Commander command object
 */
const runCipherCommand = (cmd) => {
  cmdArgs = cmd

  rl.on('line', onReceiveLine)
  rl.on('close', onInputStreamClose)

  if (process.stdin.isTTY) {
    log(`${chalk.green('Hey human! Enter your plain text message below and press CTRL+C or CTRL+D when done:')}\n`)
  }
}

module.exports = runCipherCommand
