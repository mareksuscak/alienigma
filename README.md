# alienigma [![Build Status](https://travis-ci.org/mareksuscak/alienigma.svg?branch=master)](https://travis-ci.org/mareksuscak/alienigma)
👽  Specialized cipher machine developed to protect aliens from deciphering 
human communication. It uses Morse code with further obfuscation.

## Installation

```sh
# NPM
npm install -g github:mareksuscak/alienigma

# Yarn
yarn global add https://github.com/mareksuscak/flatten-deep-js
```

## How To Use

```sh
# Prints help
$ alienigma
$ alienigma help

# Ciphering a UTF-8 text from standard input
$ alienigma cipher

# Ciphering a UTF-8 text file (prints the ciphered message on standard output)
$ cat secret_message.txt | alienigma cipher
$ alienigma cipher < secret_message.txt

# Ciphering without obfuscation
$ alienigma --no-obfuscation cipher

# Writing the ciphered message to a text file
$ cat secret_message.txt | alienigma cipher > ciphered_message.txt
```

## Running Tests

Interactive mode

```js
// NPM
npm test -- --watch

// Yarn
yarn test -- --watch
```

Single run mode:

```js
// NPM
npm test

// Yarn
yarn test
```

## Known Issues

- Can't decode/deobfuscate messages at the moment
- No code coverage monitoring (Jest [supports --coverage flag](http://facebook.github.io/jest/docs/cli.html#coverage) + 
  [junit reporter](https://github.com/larrymyers/jasmine-reporters) necessary)
- Missing end-to-end tests ([nixt](https://github.com/vesln/nixt))
- Missing benchmarks ([benchmark.js](https://benchmarkjs.com/))
- No [eslint](http://eslint.org/) checks
- Not using [flow](https://flow.org/) for static type checks

## Contributing

See our [Contribution Guidelines](CONTRIBUTING.md).

## License

See the [License](LICENSE.md).
