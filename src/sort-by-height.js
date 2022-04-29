const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
     
  let indexes = new Array();
   for(let i = 0 ; i<arr.length;i++){
      if(arr[i] == -1){
          indexes.push(i);
      }
   }
   let count = indexes.length;
   arr = arr.sort((a,b)=> {return a-b} ).filter(item=>item!=-1);
   console.log(indexes);
for(let i = 0 ; i<indexes.length;i++){
    arr.splice(indexes[i],0,-1);

}
return arr;
  let r;
 }

module.exports = {
  sortByHeight
};
