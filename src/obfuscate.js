const compress = {
  '.': (length) => String(length),
  '-': (length) => String.fromCharCode(64 + length)
}

/**
 * Obfuscates a given text by running a modified run-length
 * encoding compression algorithm.
 *
 * @param {string} text The string to obfuscate.
 */
module.exports = function obfuscate(text) {
  if (!text || typeof text !== 'string') {
    return ''
  }

  return text.replace(/-+|\.+/g, (match, offset, string) => {
    const char = match[0]
    const length = match.length

    return compress[char](length)
  })
}
