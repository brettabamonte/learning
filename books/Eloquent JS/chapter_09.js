/*1. Regexp golf */

verify(/ca[r,t]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);
//p followed by o or r then optionally followed by an o. Then another p
verify(/p[o,r]o?p/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);
//ferr followed by either y, et, or ari
verify(/ferr(y|et|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

//Any alphanumeric character (word) followed by ious. Then look ahead and there either needs to be whitespace or end of input.
verify(/\wious(?=\s|$)/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

//Any whitespace character followed by a period, comma, colon, or semicolon
verify(/\s(\.|\,|\:|\;)/,
       ["bad punctuation ."],
       ["escape the period"]);

//A word longer than 6 letters
verify(/\w{7,}/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

//Anything that starts with a space or beginning of input. Followed by anything except e or E
verify(/(^|\s)(?=[^e,E]+($|\s))/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}

//TODO: 2 & 3
