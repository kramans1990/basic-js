const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
     
  let resultArray = new Array();

  names.forEach(element => {
       let file = resultArray.filter(item=>item == element);
        if(file.length == 0){
            resultArray.push(element);
        } 
        else {
            let index = 1;
            let t = true;
            let searchName = element;
          while(t){
              let findnext = resultArray.filter(item=> item ==searchName);
              if(findnext.length == 0){
                  resultArray.push(searchName);
                  t = false;
              }
             
              else{ searchName = element + '(' + index+')';
                    index++;}
          }             
        } 
  });
var X;  
return resultArray;
}
module.exports = {
  renameFiles
};
