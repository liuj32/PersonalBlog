/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var a , b , c
    a = b = c = -Infinity
    for(var num of nums) {
      if (num === a || num === b) {
        continue
      }
      if (num > a) {
        c = b
        b = a
        a = num
      } else if (num > b) {
        c = b
        b = num
      } else {
        c = Math.max(c, num)
      }
    }
  
    return c === -Infinity ? a : c