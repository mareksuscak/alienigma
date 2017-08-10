# alienigma [![Build Status](https://travis-ci.org/mareksuscak/alienigma.svg?branch=master)](https://travis-ci.org/mareksuscak/alienigma)
👽  Specialized cipher machine developed to protect aliens from deciphering 
human communication.

## Installation

```sh
# NPM
npm install -g github:mareksuscak/alienigma

# Yarn
yarn global add https://github.com/mareksuscak/flatten-deep-js
```

## How To Use

```sh
# Encoding a UTF-8 text file (prints the encoded message on standard output)
$ alienigma encode secret_message.txt

# Encoding a UTF-8 text from standard input
$ cat secret_message.txt | alienigma encode
$ alienigma encode < secret_message.txt

# Writing the encoded message to a text file
$ alienigma encode secret_message.txt > encoded_message.txt
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

- No code coverage monitoring (Jest [supports --coverage flag](http://facebook.github.io/jest/docs/cli.html#coverage) + 
  [junit reporter](https://github.com/larrymyers/jasmine-reporters) necessary)
- Missing end-to-end tests
- Missing benchmarks ([benchmark.js](https://benchmarkjs.com/))
- No [eslint](http://eslint.org/) checks
- Not using [flow](https://flow.org/) for static type checks

## Contributing

See our [Contribution Guidelines](CONTRIBUTING.md).

## License

See the [License](LICENSE.md).
