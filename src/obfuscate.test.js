const obfuscate = require('./obfuscate')

test('obfuscates consecutive dashes with the letter of the alphabet at that position', () => {
  expect(obfuscate('---/----')).toEqual('C/D')
})

test('obfuscates consecutive dots with a number', () => {
  expect(obfuscate('...|....')).toEqual('3|4')
})

test('returns an empty string for non-string input', () => {
  expect(obfuscate(null)).toString('')
  expect(obfuscate(undefined)).toString('')
  expect(obfuscate([])).toString('')
  expect(obfuscate({})).toString('')
  expect(obfuscate(true)).toString('')
  expect(obfuscate(1)).toString('')
})
