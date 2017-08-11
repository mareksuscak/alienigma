const morse = require('./morse')

const CIPHER_LETTER_SEPARATOR = '|'
const CIPHER_WORD_SEPARATOR = '/'

const WORD_SEPARATOR_REGEX = /[, ]+/
const LINE_SEPARATOR_REGEX = /\n+/

/**
 * Here's how the cipher works:
 *
 * 1. Letters within a word are separated with pipe (|)
 * 2. Words within a line are separated with forward slash (/)
 * 3. Line breaks are preserved
 * 4. Message is encoded with Morse Code encoder
 */

/**
 * Inserts the pipe (|) in between all the letters.
 *
 * @param  {string} word Word to process
 * @return {string} Processed word
 */
const processWord = (word) => (
  word
    .split('')
    .join(CIPHER_LETTER_SEPARATOR) /* 1 */
)

/**
 * Splits the line into words, processes
 * them further by calling processWord and
 * joins them with forward slash (/).
 *
 * @param  {string} line Line to process
 * @return {string} Processed line
 */
const processLine = (line) => (
  line
    .split(WORD_SEPARATOR_REGEX)
    .map(processWord)
    .join(CIPHER_WORD_SEPARATOR) /* 2 */
)

/**
 * Splits the message into lines, processes
 * them further by calling processLine and
 * joins them with a line feed char (\n).
 *
 * @private
 * @param  {string} message Message to process
 * @return {string} Processed message
 */
const processMessage = (message) => (
  message
    .split(LINE_SEPARATOR_REGEX)
    .map(processLine)
    .join('\n') /* 3 */
)

/**
 * Ciphers a message with a modified Morse code
 *
 * @param  {string} message Messate to encode
 * @return {string} An ciphered message
 */
const cipher = (message) => {
  const morseOptions = {
    ignoredChars: '|/\n\t'
  }

  return morse.encode(processMessage(message), morseOptions) /* 4 */
}

module.exports = cipher
