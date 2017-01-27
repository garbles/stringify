# stringify-tag

Template literal tag that properly stringifies all inputs.

## Use

```js
import stringify from 'stringify-tag';

const obj = {
  a: 1,
  b: 'hello'
};

stringify`My object: ${obj}`;
// >> "My object: {\"a\":1,\"b\":\"hello\"}"
```

## Install

```
yarn add stringify-tag
```
