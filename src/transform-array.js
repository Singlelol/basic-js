const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let result = arr.slice();
  try {
    if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
    let x = arr.length;

    for(let i = 0; i < x; i++) {
      if(String(result[i]).includes('--discard-next')) {
        if (i === x - 1) {
          result.splice(i, 1)
        } else {
          result.splice(i, 2)
        }
      }
      if(String(result[i]).includes('--discard-prev')) {
        if(i === 0 || String(arr[i]).includes('--discard-next')) {
          result.splice(i, 1);
        } else {
          result.splice(i - 1, 2);
        }
        i -= 1
      }
      if(String(result[i]).includes('--double-next')) {
        if (i === x - 1) {
          result.splice(i, 1);
        } else {
          result.splice(i, 1, result[i + 1]);
        }
        i -= 1
      }
      if(String(result[i]).includes('--double-prev')) {
        if (i === 0 || String(arr[i]).includes('--discard-next')) {
          result.splice(i, 1);
        } else {
          result.splice(i, 1, result[i - 1]);
        }
      }
    }

    
  } catch (error) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  return result;
}

module.exports = {
  transform
};
