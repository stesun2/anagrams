// Can you translate this driver code to unit tests?

var ana = require("./anagram");

console.log(ana.isAnagram('charm', 'march') === true);
console.log(ana.isAnagram('zach', 'attack') === false);
console.log(ana.isAnagram('CharM', 'mARcH') === true);
console.log(ana.isAnagram('abcde2', 'c2abed') === true);

console.log("This test is for the challenge quesiton");
console.log(ana.isAnagram('Anna Madrigal', 'A man and a girl') === true);
