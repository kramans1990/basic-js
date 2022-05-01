const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  isDirect = true
  
   N = 26
  constructor(a){

      this.isDirect = a == false? false:true; 
  }    

      encrypt(message,key) {
      if(arguments.length!=2)
      {
          throw new Error ('Incorrect arguments!');
      }
      if(message  == undefined){
        throw new Error ('Incorrect arguments!');
    }
    if(key  == undefined){
        throw new Error ('Incorrect arguments!');
    }
      message = message.toString().toLowerCase();
      key = key.toString().toLowerCase();
    let  ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   let keyWordIndex = 0;
   let keyWordLength = key.toString().length;
      let messageArr = message.split('');      
      let result = "";
      messageArr.forEach(element => {
          let i =  (ABC.indexOf(element));
          let b = ABC.indexOf(key[keyWordIndex]);
          if(i>=0){
            let index =  (ABC.indexOf(element) + ABC.indexOf(key[keyWordIndex])) %26;
            result += ABC[index];
            keyWordIndex++;
            if(keyWordIndex == keyWordLength){keyWordIndex = 0;}}
            else{result += element;}
      });//AEIHQX SX DLLU!  
      
      if(this.isDirect){
      return result.toUpperCase();
      }
      else{
          let arr = result.split('').reverse();
          let x = arr.reduce((a,b) =>'' + a+ ''+ b , '');
          return x.toUpperCase();
          }
  }


  decrypt(message,key) {
      if(arguments.length!=2)
      {
          throw new Error ('Incorrect arguments!');
      }
      if(message  == undefined){
        throw new Error ('Incorrect arguments!');
    }
    if(key  == undefined){
        throw new Error ('Incorrect arguments!');
    }
    message = message.toString().toLowerCase();
    key = key.toString().toLowerCase();
    let  ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
 
 
    let keyWordIndex = 0;
   let keyWordLength = key.toString().length;
      let messageArr = message.split('');      
      let result = "";

      messageArr.forEach(element => {
         
          let i =  (ABC.indexOf(element));
          if(i>=0){
            let index =  (ABC.indexOf(element) +  26 - ABC.indexOf(key[keyWordIndex])) %26;
            result += ABC[index];
            keyWordIndex++;
            if(keyWordIndex == keyWordLength){keyWordIndex = 0;}}
            else{result += element;}
      });//AEIHQX SX DLLU!  
      
      if(this.isDirect){
      return result.toUpperCase();
      }
      else{
          let arr = result.split('').reverse();
          let x = arr.reduce((a,b) =>'' + a+ ''+ b , '');
          return x.toUpperCase();
          }
  }
}

module.exports = {
  VigenereCipheringMachine
};
