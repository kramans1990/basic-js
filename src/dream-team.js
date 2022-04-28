const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
    
  if(Array.isArray(members) == false){
    return false;
}
  let membersString = members.filter(p => typeof(p) == typeof('string'));
 
  let Team = new Array;
  
  membersString.forEach(function (item) {
      Team.push(item.replace(/[^a-zA-Z]+/g, '').replace(' ','')[0].toUpperCase());
  });

Team = Team.sort();
let res = ''
Team.forEach(item=>{res+=item;})
  return res;

}

module.exports = {
  createDreamTeam
};
