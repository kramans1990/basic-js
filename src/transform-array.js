const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)){
      throw new Error ('\'arr\' parameter must be an instance of the Array!');
  } 
//   '--discard-next'
//  '--discard-prev'
//  '--double-next' 
//  '--double-prev'
let result = new Array();

arr.forEach(item=>result.push(item));

var T = result.length;
    for(var i = 0 ; i<T;i++){
           if(result[i] == '--discard-next'){
               if (i<  result.length -1)
               {  
                result.splice(i+1,1);                   
                }  
                result[i]= result[i] + "#";
                   i = 0;
                   T = result.length;
           }
           /////
           if(result[i] == '--discard-prev'){
            if (i>0)
            {  
                result.splice(i-1,1);  
                result[i-1] = result[i-1] + "#";                 
             }  
             if(i == 0){  result[i] = result[i] + "#";}
           
                i = 0;
                T = result.length;
        }
       
        /////
        if(result[i] == '--double-next'){
            if (i<  result.length -1)
            {  
                result.splice(i+1,0,result[i+1]); 
                                 
             }  
             if(i == result.length-1 ){
                  
                }
              result[i] = result[i]+"#";
                i = 0;
                T = result.length;
        }
        /////
         /////
         if(result[i] == '--double-prev'){
            if (i>0)
            {  
                result.splice(i-1,0,result[i-1]);  
                result[i+1] = result[i+1]+"#"         
             }  
            if(i == 0 ){ result[i] = result[i]+"#";}
            
                i = 0;
                T = result.length;
        }
          
          
      
    }
    result = result.filter(item=> item!=("--discard-next#"));
    result = result.filter(item=> item!=("--discard-prev#"));
    result = result.filter(item=> item!=("--double-next#"));
    result = result.filter(item=> item!=("--double-prev#"));
    console.log(arr);
    return result;
}

module.exports = {
  transform
};

