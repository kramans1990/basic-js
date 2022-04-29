const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
       
  let sizeX = matrix[0].length;
  let sizeY = matrix.length;

 let arrT = new Array();
  
  for(let x = 0; x<sizeX;x++)  
  {
  let arr = new Array();
  for(let y = 0 ; y<sizeY;y++){
  arr.push(matrix[y][x]);
  }
  arrT.push(arr);
}
console.log(arrT);
let result = 0;
  arrT.forEach(element=>{
       console.log(element);
      for(let i = element.length-1 ; i>0;i--){
          let k = 1 ;
         if(element[i-1] == 0){
                 k=0;
              }
             console.log(element[i],k);
             result+=element[i]*k;
         }
      
  })
  let first = matrix[0].reduce((a,b)=>a+b,0);
  return result + first;
  }

module.exports = {
  getMatrixElementsSum
};
