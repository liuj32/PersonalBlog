/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var len = nums.length
  for(var i=0;i<len;i++) {
      if (target == nums[i]) {
          return i
      } else if (target > nums[i]) {
          if (i+1 == len) {
              return len
          }
         if (target < nums[i+1]) {
             return i+1
         }
      } else if(target < nums[i]) {
          return i
      }
  }
};


var searchInsert = function(nums, target) {
  var len = nums.length
  return biarySearch(nums, target, 0, len-1)
};

function biarySearch(arr, target, left, right) {
  if (target < arr[left]) {
      return left
  }
  if (target > arr[right]) {
      return right+1
  }    
  var midIdx = left + Math.floor((right - left) / 2)
  if (target == arr[midIdx]) {
     return midIdx
  } else if (target < arr[midIdx]){
      return biarySearch(arr, target, left, midIdx-1)
  } else {
      return biarySearch(arr, target, midIdx+1, right)
  }
}