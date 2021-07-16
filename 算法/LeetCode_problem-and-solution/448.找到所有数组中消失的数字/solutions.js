/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var m = nums.length
    var res = []
    for(var i = 0;i<m;i++) {
      var index = Math.abs(nums[i]) - 1
      nums[index] = -Math.abs(nums[index])
    }
    for(var i = 0;i<m;i++) {
      if (nums[i] > 0) {
        res.push(i+1)
      }
    }
    return res
  };