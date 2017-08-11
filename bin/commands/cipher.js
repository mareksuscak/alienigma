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
  if (process.stdout.isTTY) {
    log(`${chalk.yellow(`Shhh! Here's your ${cmdArgs.obfuscation ? 'ciphered and obfuscated' : 'ciphered'} message:`)}\n`)
  }

  const runnerOptions = { obfuscate: cmdArgs.obfuscation }
  const encodedLines = lineBuffer.map((line) => alienigma.run(line, runnerOptions))

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
