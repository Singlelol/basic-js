const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let num = String(n).split('');
  let result = num[0];
  for(let i = 0; i < num.length - 1; i++) {
    let x1 = num.slice()
    for(let x = 1; x < num.length; x++) {
      let x2 = num.slice()
      if (result > num[x]) {
        x1.splice(num.indexOf(result), 1)
        x2.splice(num.indexOf(num[x]), 1)
        if(Number(x1.join('')) < Number(x2.join(''))) {
          result = num[x];
        }
      }
    }
  }
  num.splice(num.indexOf(result), 1);
  return Number(num.join(''));
}

module.exports = {
  deleteDigit
};
