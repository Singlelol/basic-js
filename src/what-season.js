const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(typeof date == "undefined") {
    return 'Unable to determine the time of year!';
  }
  try {
    !isNaN(date.valueOf())
    let x = Math.round(date.getMonth() / 3);
    switch (x) {
      case 1:  
        return 'spring'
      break;
      case 2:  
        return 'summer'
      break;
      case 3:  
        return 'fall'
      break;
      default:
        return 'winter'
    }
  } catch (err) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
