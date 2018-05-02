# grammarize
:books: A small helper function to provide some grammatical context to your numbers.

## Install

```
$ npm install grammarize
```

## Usage

```js
import grammarize from 'grammarize';

const messageAmount = 5;
const sentence = `There ${grammarize(messageAmount, 'is', 'are')} ${messageAmount} unread ${grammarize(messageAmount, 'message', 'messages')} in your account`;
console.log(sentence);
// There are 5 unread messages in your account

const factoryAmount = 1;
const sentence = `There ${grammarize(factoryAmount, 'is', 'are')} ${factoryAmount} ${grammarize(factoryAmount, 'factory', 'factories')} on the street`;
console.log(sentence);
// There is 1 factory on the street
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