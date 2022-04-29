const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let t =  typeof (str);
  let ta =  typeof (options.addition);
  str = typeof (str) == 'object' ? `${str}` : str ;
  str = str == null ? 'null' : str;

  
//////
   let addition = options.addition === null ? 'null' : options.addition;
   addition = ta == 'object' ? `${options.addition}`  : options.addition ;
   addition = addition== undefined? "" : addition.toString();
/////
  str  =str.toString();
  let repeatTimes = options.repeatTimes==undefined? 0: options.repeatTimes.toString();
  let separator = options.separator == undefined ? '+'  :  options.separator.toString();
 
  let additionRepeatTimes = options.additionRepeatTimes==undefined? 0 : options.additionRepeatTimes.toString();
  let additionSeparator = options.additionSeparator==undefined ? '|' : options.additionSeparator.toString();

let addition_ = configAddition();

let stringN = parseInt(repeatTimes);
let res= "";
for(let i = 0 ; i<stringN-1;i++){

res +=str + addition_ + separator;
} 
if(stringN !=0){
  res += str+addition_;
}
if(stringN ==0){
  res += str + addition;
}


 function  configAddition(){
     let add = "";
       let n = parseInt(additionRepeatTimes)
      
        if(n == 1){
            add+=addition;
        }
        else{
          for(let i = 0 ; i< n-1 ; i++){
              add+= addition+ additionSeparator;     
             }
             add +=addition;
        }
          return add;
 }
return res;
}
module.exports = {
  repeater
};
