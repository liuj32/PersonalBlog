/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var len = nums.length
    for(var i=len-1;i>=0;i--) {
      if(i-1 >= 0 && nums[i] > nums[i-1]) {
        var j = len-1
        while(j>i && nums[j] <= nums[i-1]) {
          j--
        }
        if (nums[j] <= nums[i-1]) {
          [nums[i], nums[i-1]] = [nums[i-1], nums[i]]
        } else {
          [nums[i-1], nums[j]] = [nums[j], nums[i-1]]
        }
        
        return reverse(nums, i)
      }
    }
    reverse(nums, 0)
    return nums
  };
  
  function reverse(nums, start) {
    var left = start, right = nums.length-1
    while(left<right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
    return nums
  }


// 优化
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var i = nums.length - 2
    while(i >= 0 && nums[i] >= nums[i+1]) {
      i--
    }
    if (i>=0) {
      var j = nums.length-1
      while(j >= 0 && nums[j] <= nums[i]) {
        j--
      }
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  
    reverse(nums, i+1)
  };
  
  function reverse(nums, start) {
    var left = start, right = nums.length-1
    while(left<right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }