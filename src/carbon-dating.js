const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  console.log(typeof(sampleActivity) , );
 if ( typeof(sampleActivity) !== typeof('string')){
     return false;
 }

console.log(typeof(sampleActivity*1) , typeof(1));
sampleActivity =  sampleActivity*1;
if(typeof(sampleActivity) !== typeof(1) || isNaN(sampleActivity)){
return false;
}
if(sampleActivity > 0){
let k = 0.693/HALF_LIFE_PERIOD;
let result  =  Math.log( MODERN_ACTIVITY/sampleActivity)/k;  
result = Math.ceil(result);
return result>0 ? result : false;;
}
else{return false}
}
module.exports = {
  dateSample
};
