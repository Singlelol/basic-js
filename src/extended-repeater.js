const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = str.toString();
  let result = '';
  let separator = "+";
  let repeatTimes = 1;
  let addition = '|';
  let additionRepeatTimes = 0;
  let additionSeparator = '';
  if("repeatTimes" in options) {
    repeatTimes = options.repeatTimes
  }

  if("separator" in options) {
    separator = options.separator
  }

  if("addition" in options) {
    addition = options.addition
    addition = addition.toString()
    if("additionSeparator" in options) {
      additionSeparator = options.additionSeparator
    }
    if(!("additionRepeatTimes" in options)) {
      additionRepeatTimes = 1;
    }
  }

  if("additionRepeatTimes" in options) {
    additionRepeatTimes = options.additionRepeatTimes
  }

  for(let i = 0; i < repeatTimes; i++) {
    result = result.concat(string)
    for(let x = 0; x < additionRepeatTimes; x++) {
      if(x !== additionRepeatTimes - 1) {
        result = result.concat(addition)
      } else {
        result = result.concat(addition, additionSeparator)
      }
    }
    if(i < repeatTimes - 1) {
      result = result.concat(separator)
    }
  }

  return result;
}

module.exports = {
  repeater
};
