/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var m = nums.length
    if (m === 1) {
      return nums[0]
    }
    var leftMaxProduct = 0, rightMaxProduct = 0
    var curProduct = 1
    for(var i=0;i<m;i++) {
      // 正向找最大子集
      curProduct *= nums[i]
      leftMaxProduct = Math.max(leftMaxProduct, curProduct)
      if (curProduct === 0) {
        curProduct = 1
      }
    }
    curProduct = 1
    for(var i=m-1;i>=0;i--) {
      // 反向找最大子集
      curProduct *= nums[i]
      rightMaxProduct = Math.max(rightMaxProduct, curProduct)
      if (curProduct === 0) {
        curProduct = 1
      }
    }
  
    return Math.max(leftMaxProduct, rightMaxProduct)
  };