const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = '';
  let string = str.split('')
  for(let i = 0; i < string.length; i++) {
    let count = 1;
    for(let x = i + 1; x < string.length + 1; x++) {
      if(string[i] === string[x]) {
        count++
      } else {
        if(count > 1) {
          result = result.concat(count, string[i])
        } else {
          result = result.concat(string[i])
        }
        i += count - 1
        break;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
