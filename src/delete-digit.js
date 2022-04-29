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
  let srnN = n.toString();
  let length = srnN.length;
  let numbers = new Array();
   for(let i =0; i<length;i++){
       let str = n.toString().split('');
       str.splice(i,1);         
       let value =  str.reduce((a,b)=>a+b)*1;
       numbers.push(value);
   }
    return numbers.reduce((a,b)=> a>b? a:b);
  
}

module.exports = {
  deleteDigit
};
