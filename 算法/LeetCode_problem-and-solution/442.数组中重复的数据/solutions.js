/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var m = nums.length
    var res = []
    for(var i=0;i<m;i++) {
      var index = Math.abs(nums[i]) - 1
      if (nums[index] < 0) {
        res.push(Math.abs(nums[i]))
      }
      nums[index] = -Math.abs(nums[index])
    }
  
    return res
  };