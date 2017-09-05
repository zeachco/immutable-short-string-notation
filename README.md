# immutable-short-string-notation

Allows you to set paths directly in strings instead of passing arrays

## How to use
The requirement must appear in the app before other immutable actions (a good idea would be to place in the root of the app if uncertain)
```javascript
require('immutable-short-string-notation');
```
Somewhere else in the application you may use the string syntax
```javascript
state.setIn('a.b.c.d.e', 42);
state.getIn('a.b.c.d.e'); // 42

// All other ways still work
state.setIn('a.b.c.d.e'.split('.'), 42);
state.setIn(['a', 'b', 'c', 'd', 'e'], 42);
state.getIn('a.b.c.d.e'); // still 42
```
## It supports the following `Immutable.Map` methods [view tests](https://github.com/zeachco/immutable-short-string-notation/blob/master/istn.spec.js)
  - getIn
  - setIn
  - mergeDeepIn
  - updateIn

## Why ?

Because writing `state.getIn(['node1', 'node23', 'node67'])` could be shorter
and `state.getIn('node1.node23.node67'.split('.'))` feel wrong when it's been repeated a tousand times

so let's just remove the split as anyway we are sure we want to pass an array here

## Installation (available on [npm](https://www.npmjs.com/package/immutable-short-string-notation))

```bash
npm install --save immutable-short-string-notation
```
or
```bash
yarn add immutable-short-string-notation --save
```
