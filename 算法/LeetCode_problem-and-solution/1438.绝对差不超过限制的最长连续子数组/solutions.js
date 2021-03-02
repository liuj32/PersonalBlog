/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    var len = nums.length
    var maxQueue = []
    var minQueue = []
    var l = 0, r = 0
    var res = 1
    while(r < len) {
      while(maxQueue.length && maxQueue[maxQueue.length-1] < nums[r]) {
        maxQueue.pop()
      }
      while(minQueue.length && minQueue[minQueue.length-1] > nums[r]) {
        minQueue.pop()
      }    
      maxQueue.push(nums[r])
      minQueue.push(nums[r])
      while(maxQueue.length && minQueue.length && maxQueue[0] - minQueue[0] > limit) {
        if (nums[l] === maxQueue[0]) {
          maxQueue.shift()
        }
        if (nums[l] === minQueue[0]) {
          minQueue.shift()
        }
        l++
      }
      res = Math.max(res, r - l + 1)
      r++
    }
  
    return res
  };