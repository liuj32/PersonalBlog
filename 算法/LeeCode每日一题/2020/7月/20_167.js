/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/**
 * 双指针
 */
var twoSum = function(numbers, target) {
  var l = 0, r = numbers.length -1
  while(l < r) {
      var sum = numbers[l]+numbers[r]
      if (sum == target) {
          break
      } else if (sum > target) {
          r--
      } else {
          l++
      }
  }
  return [l+1, r+1]
};

/**
 * 二分查找
 */

var twoSum = function(numbers, target) {
  var len = numbers.length
  for(var i=0;i<len;i++) {
      var value = target - numbers[i]
      var l = i+1, r = len-1
      while(l <= r) {
         var mid = l + Math.floor((r-l) / 2)
          if (numbers[mid] == value) {
               return [i+1, mid+1]
          } else if (numbers[mid] > value) {
              r = mid - 1
          } else {
              l = mid + 1
          }
      }
  }

  return [-1, -1]
};