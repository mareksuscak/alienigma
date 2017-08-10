const encode = require('./encode')

test('encodes international Morse code symbols', () => {
  expect(encode('A')).toEqual('.-')
  expect(encode('B')).toEqual('-...')
  expect(encode('C')).toEqual('-.-.')
  expect(encode('D')).toEqual('-..')
  expect(encode('E')).toEqual('.')
  expect(encode('F')).toEqual('..-.')
  expect(encode('G')).toEqual('--.')
  expect(encode('H')).toEqual('....')
  expect(encode('I')).toEqual('..')
  expect(encode('J')).toEqual('.---')
  expect(encode('K')).toEqual('-.-')
  expect(encode('L')).toEqual('.-..')
  expect(encode('M')).toEqual('--')
  expect(encode('N')).toEqual('-.')
  expect(encode('O')).toEqual('---')
  expect(encode('P')).toEqual('.--.')
  expect(encode('Q')).toEqual('--.-')
  expect(encode('R')).toEqual('.-.')
  expect(encode('S')).toEqual('...')
  expect(encode('T')).toEqual('-')
  expect(encode('U')).toEqual('..-')
  expect(encode('V')).toEqual('...-')
  expect(encode('W')).toEqual('.--')
  expect(encode('X')).toEqual('-..-')
  expect(encode('Y')).toEqual('-.--')
  expect(encode('Z')).toEqual('--..')
  expect(encode('0')).toEqual('-----')
  expect(encode('1')).toEqual('.----')
  expect(encode('2')).toEqual('..---')
  expect(encode('3')).toEqual('...--')
  expect(encode('4')).toEqual('....-')
  expect(encode('5')).toEqual('.....')
  expect(encode('6')).toEqual('-....')
  expect(encode('7')).toEqual('--...')
  expect(encode('8')).toEqual('---..')
  expect(encode('9')).toEqual('----.')
  expect(encode('.')).toEqual('.-.-.-')
  expect(encode(',')).toEqual('--..--')
})

test('treats lowercase letters as uppercase', () => {
  expect(encode('a')).toEqual('.-')
  expect(encode('b')).toEqual('-...')
  expect(encode('c')).toEqual('-.-.')
  expect(encode('d')).toEqual('-..')
  expect(encode('e')).toEqual('.')
  expect(encode('f')).toEqual('..-.')
  expect(encode('g')).toEqual('--.')
  expect(encode('h')).toEqual('....')
  expect(encode('i')).toEqual('..')
  expect(encode('j')).toEqual('.---')
  expect(encode('k')).toEqual('-.-')
  expect(encode('l')).toEqual('.-..')
  expect(encode('m')).toEqual('--')
  expect(encode('n')).toEqual('-.')
  expect(encode('o')).toEqual('---')
  expect(encode('p')).toEqual('.--.')
  expect(encode('q')).toEqual('--.-')
  expect(encode('r')).toEqual('.-.')
  expect(encode('s')).toEqual('...')
  expect(encode('t')).toEqual('-')
  expect(encode('u')).toEqual('..-')
  expect(encode('v')).toEqual('...-')
  expect(encode('w')).toEqual('.--')
  expect(encode('x')).toEqual('-..-')
  expect(encode('y')).toEqual('-.--')
  expect(encode('z')).toEqual('--..')
})

test('encodes consecutive letters', () => {
  expect(encode('HELLO')).toEqual('......-...-..---')
})

test('returns an empty string for a non-string input', () => {
  expect(encode(null)).toEqual('')
  expect(encode(undefined)).toEqual('')
  expect(encode(1)).toEqual('')
  expect(encode(true)).toEqual('')
  expect(encode([])).toEqual('')
  expect(encode({})).toEqual('')
})
