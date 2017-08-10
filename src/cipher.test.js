const cipher = require('./cipher')

test('separates letters with pipe (|)', () => {
  expect(cipher('HELLO')).toEqual('....|.|.-..|.-..|---')
})

test('separates words with a single forward slash (/)', () => {
  expect(cipher('HELLO WORLD'))
    .toEqual('....|.|.-..|.-..|---/.--|---|.-.|.-..|-..')
})

test('treats multiple lines separately and preserves line breaks', () => {
  const message
    = 'HELLO\n' +
      'I AM IN TROUBLE'

  const cipheredMessage
    = '....|.|.-..|.-..|---\n' +
      '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.'

  expect(cipher(message)).toEqual(cipheredMessage)
})

test('trims multiple word separators', () => {
  expect(cipher('HELLO   WORLD'))
    .toEqual('....|.|.-..|.-..|---/.--|---|.-.|.-..|-..')
})
