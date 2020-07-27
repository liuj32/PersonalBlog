/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。请找出其中最小的元素。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var len = nums.length
  if (len == 0) return null

  var left = 0, right = len -1
  while(left < right) {
      var midIdx = left + Math.floor((right - left) / 2)
      if (nums[midIdx] < nums[right]) {
         right = midIdx
      } else if (nums[midIdx] > nums[right]) {
          left = midIdx+1            
      } else {
          right -= 1
      }
  }
  return nums[left]
};