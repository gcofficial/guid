# GUID - Global Unique IDentifier

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/gcofficial/lguid/master/LICENSE)
[![npm version](https://badge.fury.io/js/lguid.svg)](https://badge.fury.io/js/lguid)
[![Netlify Status](https://api.netlify.com/api/v1/badges/51729682-829f-474c-925c-cfd1cac1e119/deploy-status)](https://app.netlify.com/sites/guid/deploys)

Global Unique IDentifier https://www.ietf.org/rfc/rfc4122.txt

[Demo](https://guid.netlify.com/)

## Installation

```
npm i --save lguid
```

## Example

```js
import guid from 'guid'

console.log(guid()) // '00000000-0000-0000-0000-000000000000'
```

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.


# License

MIT © Eugen Guriev eg@beagl.in
