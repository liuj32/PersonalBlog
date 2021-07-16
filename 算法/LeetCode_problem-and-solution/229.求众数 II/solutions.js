/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if (nums == null || nums.length === 0) {
      return []
    }
  
    var candidate1, candidate2
    var count1 = 0, count2 = 0
    for(var num of nums) {
      if(count1 === 0 && num !== candidate2) {
        candidate1 = nums[i]
      }
      if (count2 === 0 && num !== candidate1) {
        candidate2 = num
      }
  
      if (num === candidate1) {
        count1++
      }
      if (num === candidate2) {
        count2++
      }
      if (num !== candidate1 && num !== candidate2) {
        count1--
        count2--
      }
    }
    var res = []
    count1 = 0, count2 = 0
    for(var num of nums) {
      if (num === candidate1) {
        count1++
      }
      if (num === candidate2) {
        count2++
      }
    }
    if (count1 > nums.length / 3) {
      res.push(candidate1)
    }
    if (count2 > nums.length / 3) {
      res.push(candidate2)
    }
    return res
  };