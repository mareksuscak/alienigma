const codes = require('./codes')

const DEFAULT_OPTIONS = {
  ignoredChars: '' // Characters that will be ignored and copied as is
}

/**
 * Uses Morse Code to encode a given word into a sequence of
 * on and offs represented by dash and dot respectively.
 *
 * @param  {string} word Word to encode
 * @return {string} A sequence of dots and dashes representing the given word
 */
module.exports = function encode(word, options = DEFAULT_OPTIONS) {
  if (!word || typeof word !== 'string') {
    return ''
  }

  let encodedWord = ''

  for (let character of word) {
    const code = codes[character.toUpperCase()]

    if (code) {
      encodedWord += code
    } else if (options && options.ignoredChars && options.ignoredChars.includes(character)) {
      encodedWord += character
    } else {
      throw new Error(
        `An unrecognized character was encountered: ${character}. ` +
        `You can use numbers, dot, comma and ISO basic latin characters (http://bit.ly/2fxRbyM).`
      )
    }
  }

  return encodedWord
}
