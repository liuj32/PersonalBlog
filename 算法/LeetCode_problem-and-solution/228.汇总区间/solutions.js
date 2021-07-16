/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var m = nums.length
    if (m === 0) {
      return []
    }
  
    var res = []
    for(var i=0,j=0;j<m;j++) {
      if (j+1 < m && nums[j] + 1 === nums[j+1]) {
        continue
      }
      if (i === j) {
        res.push(nums[i] + '')
      } else {
        res.push(nums[i] + '->' + nums[j])
      }
      i = j + 1
    }
    return res
  };