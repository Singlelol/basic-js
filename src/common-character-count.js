const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let str = s1.split('');
  let word = s2.split('');
  for(let i = 0; i < s1.length; i++) {
    for(let x = 0; x < word.length; x++) {
      if(str[i] === word[x]) {
        count++;
        i--;
        str.splice(i, 1);
        word.splice(x, 1);
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
