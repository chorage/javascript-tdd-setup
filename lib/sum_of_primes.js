 Write a function that calculates the sum of primes.
'use strict'

module.exports = {
 sumOfPrimes: function(num){
  var allprimes=[];
  for(i=2;i<=num;i++){
       var notPrime = true;
        for(j=2 ;j<=i;j++){
            if(i%j===0 && i!==j){
                notPrime = false;
            }
          }

    if(notPrime === true){
        allprimes.push(i);
    }
  }

  var addPrimes = allprimes.reduce(function(a,b){
     return a+b;
  });

  return addPrimes;
}

Sum_of_primes(10);
