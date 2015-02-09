var tape = require('tape');
var nthMatch = require('./');

tape('Find nth match', function (t) {
  var source = 'hello world';
  var match;

  match = nthMatch(source, /\w{2}/, 0);
  t.equals(match[0], 'he', 'Match number is zero-based');

    match = nthMatch(source, /\w{2}/, 3);
  t.equals(match[0], 'lo', 'Correct chars for fourth match');

  t.end();
});
