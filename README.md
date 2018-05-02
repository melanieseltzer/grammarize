# grammarize [![npm version](https://badge.fury.io/js/grammarize.svg)](https://badge.fury.io/js/grammarize) [![Build Status](https://travis-ci.org/melanieseltzer/grammarize.svg?branch=master)](https://travis-ci.org/melanieseltzer/grammarize) [![Known Vulnerabilities](https://snyk.io/test/github/melanieseltzer/grammarize/badge.svg)](https://snyk.io/test/github/melanieseltzer/grammarize)

:books: A small helper function to provide some grammatical context to your numbers.

## Install

```
$ npm i grammarize
```

## Usage

```js
import grammarize from 'grammarize';

const messageAmount = 5;
console.log(grammarize(messageAmount, 'message', 'messages'));
//=> messages
```

## grammarize(amount, singular, plural)

#### amount

Type: `number`

#### singular

Type: `string`

#### plural

Type: `string`

## License

```
MIT © Melanie Seltzer
```