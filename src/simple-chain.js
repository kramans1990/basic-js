const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain : new Array(), 
  getLength() {
     return this.chain.length;
  },
  addLink(value) {     
    if(arguments.length == 0){
      this.chain.push('');
    }      
    else{
       value = value == null ? 'null' : value; 
       value = value.toString();
    this.chain.push(value);}
    return this;
  },
  removeLink(position) {
     
   let pos = position.toString();
   let m;
   let match = pos.match(/[0-9]+/);
   if(match.length == 1){
      m = match[0];
   }
   else{
      this.chain = new Array();
     throw new Error ('You can\'t remove incorrect link!');
   }
   if(m == pos){
      
      let index = parseInt(m)-1;
      if(index <this.chain.length && index>=0){
      this.chain.splice(index,1);
      return this;}
      else{
        this.chain = new Array();
         throw new  Error ('You can\'t remove incorrect link!');
        }
   }
   
   else{
     this.chain = new Array();
      throw new Error ('You can\'t remove incorrect link!');
     }

  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
      let result="";
    
      this.chain.forEach((i, index, array) =>
      {
       if (index === array.length - 1){ 
           result += '( ' +i +' )';
       }
       else{
           result += '( ' +i +' )' + '~~';
       }
      }
      )
         this.chain = new Array();
      return result;
  },        
};
module.exports = {
  chainMaker
};
