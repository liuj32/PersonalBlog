/**
 * @param {number} n
 * @return {number}
 */

/** 暴力 */
var countPrimes = function(n) {
    var isPrimes = (num) => {
        for(var i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false
        }
        }
        return true
    }

    var ans = 0
    for(var i = 2;i<n;i++) {
        if(isPrimes(i)) {
        ans++
        }
    }

    return ans
};
  

/** 埃氏筛 */
var countPrimes = function(n) {
    var isPrime = new Array(n).fill(1)
    var ans = 0
    for(var i = 2;i<n;i++) {
      if(isPrime[i]) {
        ans++
  
        if(i * i <= n) {
          for(var j = i * i; j < n; j+=i) {
            isPrime[j] = 0
          }
        }
      }
    }
  
    return ans
};