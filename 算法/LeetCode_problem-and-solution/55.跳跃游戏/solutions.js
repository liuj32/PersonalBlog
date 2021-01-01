/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var maxJumpIndex = 0
    var len = nums.length
    for(var i=0;i<len;i++) {
      maxJumpIndex = Math.max(maxJumpIndex, i+nums[i])
      if(maxJumpIndex >= len-1) {
        return true
      }    
      if (maxJumpIndex <= i) {
        return false
      }
    }
  
    return true
  };