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

const processWord = (word) => (
  word
    .split('')
    .join(CIPHER_LETTER_SEPARATOR) /* 1 */
)

const processLine = (line) => (
  line
    .split(WORD_SEPARATOR_REGEX)
    .map(processWord)
    .join(CIPHER_WORD_SEPARATOR) /* 2 */
)

const processMessage = (message) => (
  message
    .split(LINE_SEPARATOR_REGEX)
    .map(processLine)
    .join('\n') /* 3 */
)

const cipher = (message) => (
  morse.encode(processMessage(message)) /* 4 */
)

module.exports = cipher
