/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var m = nums.length
    var res = 0
    for(var i=0,j=0;j<m;j++) {
      if (nums[j] !== 1 || j === m-1) {
        var value = nums[j] === 1 ? j-i + 1 : j-i
        res = Math.max(res,  value)
        i = j+1
      }
    }
  
    return res
  };