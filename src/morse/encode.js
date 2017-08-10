const codes = require('./codes')

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
