/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var m = nums.length
     k = k % m
     for(var i=0;i<k;i++) {
        var prev = nums[nums.length-1]
        for(var j=0;j<nums.length;j++) {
          var temp = nums[j]
          nums[j] = prev
          prev = temp
        }
     }
  
     return nums
  };
  
  var rotate = function(nums, k) {
    var m = nums.length
    k = k % m
    reverse(nums, 0, m-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, m-1)
    return nums
  };
  
  function reverse(nums, l, r) {
    while(l<r) {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
      r--
    }
  }