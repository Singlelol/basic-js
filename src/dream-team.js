const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(array) {
  if(!Array.isArray(array)) return false;

  let arr = array.filter(x => typeof(x) === 'string');
  let arr1 = [];
  
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i].trim().toUpperCase());
  };
  arr = arr1.sort();
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i][0]);
  };

  return result;
}

module.exports = {
  createDreamTeam
};
