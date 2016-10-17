 // Write a function that calculates the sum of primes.//
'use strict'

module.exports = {
  sumOfPrimes: function(num){
    var allprimes=[];
   
    for(var i=2;i<=num;i++){
       var isPrime = true;
    

      for(var j=2 ;j<=i;j++){
        if(i%j===0 && i!==j){
          isPrime = false;
        }
      }

      if(isPrime === true){
        allprimes.push(i);
      }
    }

    var addPrimes = allprimes.reduce(function(a,b){
     return a+b;
    });
//
    return addPrimes;
  }
}

