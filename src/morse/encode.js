const codes = require('./codes')

/**
 * Uses Morse Code to encode a given word into a sequence of
 * on and offs represented by dash and dot respectively.
 *
 * @param  {string} word Word to encode
 * @return {string} A sequence of dots and dashes representing the given word
 */
module.exports = function encode(word) {
  if (!word || typeof word !== 'string') {
    return ''
  }

  let encodedWord = ''

  for (let character of word) {
    const code = codes[character.toUpperCase()]

    if (code) {
      encodedWord += code
    } else {
      encodedWord += character
    }
  }

  return encodedWord
}
