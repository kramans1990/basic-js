const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
      
  let field = new Array();
  let y = matrix.length;
  let x = matrix[0].length;
    
  for(let i = 0 ; i<y;i++ ){
      field.push(new Array())
       for(let c = 0;c< x;c++){
         
          let number = findItems(i,c)
           field[i].push(number);
       }

  }
console.log(field);
return field;
    function findItems(y,x){
        let arr = new Array();
        let y1 = matrix[y-1]
        let y2 = matrix[y-1]
        let y3 = matrix[y]
        let y4 = matrix[y+1]
        let y5 = matrix[y+1]
        let y6 = matrix[y+1]
        let y7 = matrix[y]
        let y8 = matrix[y-1]
        
        y1 = y1== undefined ? undefined : matrix[y-1][x]
        y2 = y2== undefined ? undefined : (matrix[y-1][x+1]);
        y3 = y3== undefined ? undefined : (matrix[y][x+1]);
        y4 = y4== undefined ? undefined : (matrix[y+1][x+1]);
        y5 = y5== undefined ? undefined : (matrix[y+1][x])
        y6 = y6== undefined ? undefined : (matrix[y+1][x-1])
        y7 = y7== undefined ? undefined : matrix[y][x-1]
        y8 = y8== undefined ? undefined :matrix[y-1][x-1]



  arr.push(y1);
  arr.push(y2);
  arr.push(y3);
  arr.push(y4);
  arr.push(y5);
  arr.push(y6);
  arr.push(y7);
  arr.push(y8);
  
        let t = arr.filter(item=>item == true).length;                          

     return t;
   }

 }
module.exports = {
  minesweeper
};
