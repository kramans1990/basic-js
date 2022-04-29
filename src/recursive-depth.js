const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
    
  count =0;

 calculateDepth(arr) {  

      let ContainsArray = arr.filter(item => Array.isArray(item))       
   
         if(ContainsArray.length == 0){                
            let a = this.count +1;
             return a;              
         }

      else{
         
          let arrays = new Array();
         ContainsArray.forEach(element => {
             arrays.push(...element);
         });     
     
            return 1 +  this.calculateDepth(arrays);
      }    
 }
}

module.exports = {
  DepthCalculator
};
