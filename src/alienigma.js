const cipher = require('./cipher')
const obfuscate = require('./obfuscate')

const DEFAULT_OPTIONS = {
  obfuscate: true
}

const alienigma = (message, options = DEFAULT_OPTIONS) => (
  options.obfuscate
    ? obfuscate(cipher(message))
    : cipher(message)
)

module.exports = alienigma
