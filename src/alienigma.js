const cipher = require('./cipher')
const obfuscate = require('./obfuscate')

const DEFAULT_OPTIONS = {
  obfuscate: true
}

/**
 * Encodes a given message.
 *
 * @param  {string} message A message to encode.
 * @param  {Object} options Encoder options.
 * @return {string} Encoded message
 */
const run = (message, options = DEFAULT_OPTIONS) => (
  options.obfuscate
    ? obfuscate(cipher(message))
    : cipher(message)
)

module.exports = {
  run
}
