const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let str1 = s1.split('')
  let str2 = s2.split('')  
  let count = 0;
  while(str1.length>0){
      
      let index = str1.length-1;
      let char = str1[index];
      let filter = str2.filter(item=>item ==char)
      if(filter.length!=0){ 
          str2.splice(str2.indexOf(char),1);       
          count++;       
      }
      str1.splice(index,1);
  }
  return count;
  }

module.exports = {
  getCommonCharacterCount
};
