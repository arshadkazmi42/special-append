# special-append

[![Build](https://github.com/arshadkazmi42/special-append/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/special-append/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/special-append.svg)](https://www.npmjs.com/package/special-append)
[![NPM Downloads](https://img.shields.io/npm/dt/special-append.svg)](https://www.npmjs.com/package/special-append)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/special-append.svg)](https://github.com/arshadkazmi42/special-append)
[![LICENSE](https://img.shields.io/npm/l/special-append.svg)](https://github.com/arshadkazmi42/special-append/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/special-append.svg)](https://github.com/arshadkazmi42/special-append/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/special-append.svg)](https://github.com/arshadkazmi42/special-append/commits/master)

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
