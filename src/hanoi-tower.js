const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {
    
  let turns_ = Math.pow(2,disksNumber)-1;
   let time= 3600*  turns_/turnsSpeed;
   time = Math.floor(time);
   let t = {
        turns: turns_ ,
        seconds: time }
  return t;
}

module.exports = {
  calculateHanoi
};
