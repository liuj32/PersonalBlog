/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var m = nums.length
    var l = 0, r = m - 1
    while(l < r) {
      var mid = Math.floor((l + r) / 2)
      if(nums[mid] > nums[mid+1]) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    return l
  };