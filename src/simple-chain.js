const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    this.length;
  },
  addLink(value) {

  },
  removeLink(position) {
    try {
      
    } catch (error) {
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {

  },
  finishChain() {

  }
};

module.exports = {
  chainMaker
};
