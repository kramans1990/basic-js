const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  
  let domainsArr = new Array();
  domains.forEach(element => {
    let regexRoot = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img
    let domainRootArr = element.matchAll(regexRoot);
    domainRootArr = Array.from(domainRootArr)
    let domainRoot = domainRootArr[0][1]; 

     let arr = domainRoot.toString().split('.').reverse();
     for(let i = 0 ; i< arr.length; i++){
         let b = i;
         let res="";
         while(b>=0){
           res =  arr[b]+'.' + res;
           b--;
         }    
         if(res.split('.').length == 2){
            res = res.replace('.','');
            res = '.' + res;
        }
        else{
         res =  '.' + res.slice(0, -1);
        }
         domainsArr.push(res);   
            
     }
  });



  let result = {}
 let counter = domainsArr => {
    return domainsArr.reduce((total, d) => {
      total[d] ? total[d]++ : total[d] = 1;
      return total;
    }, {});
  };
  var t = counter(domainsArr);
  return counter(domainsArr)

}

module.exports = {
  getDNSStats
};
