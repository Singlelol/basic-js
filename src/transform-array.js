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
  let result = [];
  try {
    if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
    let x = arr.length;

    /*function double(prev, next) {
    
    };*/

    function discard(prev, that, next)  {
      if(prev === '--discard-next') {

      }
    };

    for(let i = 0; i < x - 1; i++) {
      
    }

    
  } catch (error) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
}

module.exports = {
  transform
};
