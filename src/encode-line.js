const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = 0;
 let arr = str.split('');
 let S = "";

 for(let i = 0 ; i< arr.length;i++){
      let x = 1;
      while(arr[i] == arr[i+1]){
          x++;i++;
      }
      x =  x==1 ? '':x; 
      S += (x + '' + arr[i]);
 }
 return S;
}

module.exports = {
  encodeLine
};
