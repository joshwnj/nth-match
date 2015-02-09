/*

  Find the nth match of a regex

  - source: string
  - pattern: Regex
  - n: int

  Returns the last Regex match object.

*/
module.exports = function nthMatch (source, pattern, n) {
  if (n < 0) { throw new Error('n must be > 0'); }

  var match;
  var index;
  var cursor = 0;

  for (var i = 0; i <= n; i += 1) {
    match = pattern.exec(source);
    if (!match) { return cursor; }

    index = match.index;
    cursor += index;

    // move the cursor forward so we don't repeat the initial match
    cursor += 1;
    source = source.substr(index + 1);
  }

  // move the cursor back to reflect the start of the match
  match.index = cursor - 1;
  return match;
};
