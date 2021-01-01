/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var sum = 0
    var acc = 1
    while(n > 0) {
       var num = n % 10
       n = Math.floor(n / 10)
       sum += num
       acc *= num
    }
    return acc - sum
};