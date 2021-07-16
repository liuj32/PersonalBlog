/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len = nums.length
    var mostRight = 0
    var curMostRight = 0
    var steps = 0
      for(var i=0;i<len-1;i++) {
        mostRight = Math.max(i+nums[i] ,mostRight)
        if (i === curMostRight) {
          steps++
          curMostRight = mostRight
        }
      }
  
    return steps
  };