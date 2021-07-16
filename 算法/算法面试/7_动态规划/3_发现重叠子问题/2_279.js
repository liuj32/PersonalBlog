/**
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * @param {number} n
 * @return {number}
 */

 /** 递归 */
var record = []
var numSquares = function(n) {
    record = []
   return help(n)
};

function help(n) {
    if (n == 1) {
        return 1
    }
    if (record[n]) {
        return record[n]
    }

    var len = Math.floor(Math.sqrt(n))
    var minNum = 0
    for(var i=1;i<=len;i++) {
        if (minNum == 0) {
            minNum =  1 + help(n - i * i)
        }
      minNum =  Math.min(minNum, 1 + help(n - i * i))
    }
    record[n] = minNum
    return minNum
}


/** 动态规划 */

var numSquares = function(n) {
    var record = [0, 1]
     for(var i=2;i<=n;i++) {
         var len = Math.floor(Math.sqrt(i))
         for(var j=1;j<=len;j++) {
             if(!record[i]) record[i] = 1 + record[i - j * j]
             record[i] = Math.min(record[i], 1 + record[i - j*j])
         }
     }
 
     return record[n]
 }