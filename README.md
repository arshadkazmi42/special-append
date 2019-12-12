# special-append

[![Build Status](https://api.travis-ci.com/arshadkazmi42/special-append.svg?branch=master)](https://api.travis-ci.com/arshadkazmi42/special-append)

Append special character after every x characters

## Install

```
npm install special-append
```

## Usage

```js
const sAppend = require('special-append');

sAppend('123456789', '-', 3));
// Output: 123-456-789

sAppend('123456789', '$', 2);
// Output: 12$34$56$78$9
```

## Parameters

- **value (string)**: string value.
- **character (string)**: character to append after x characters.
- **character limit**: character limit after which the character will be added.

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/special-append/issues/new).

Read our contributing [guide](CONTRIBUTING.md) to get started with contributing to the codebase.

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
