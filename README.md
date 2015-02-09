nth-match
====

[![Build Status](https://secure.travis-ci.org/joshwnj/nth-match.png)](http://travis-ci.org/joshwnj/nth-match)

Install
----

`npm install nth-match`

Usage
----

```js
var nthMatch = require('nth-match');
var source = 'hello world';
var match = nthMatch(source, /\w{2}/, 3);

console.log(match)
// > 'lo'
```

Why not just use the `/g` modifier?
----

You might rewrite the example above as:

```js
var matches = /\w{2}/g;
console.log(matches[3]);
```

but this will give slightly different results. `nth-match` allows overlaps in matches:

```
['he', 'el', 'll', 'lo']
```

whereas using the `/g` modifier gives:

```
['he', 'll', 'wo', 'rl']
```

License
----

MIT
