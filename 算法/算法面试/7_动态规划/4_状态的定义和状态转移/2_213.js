/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着通的防盗的。同时，相邻的房屋装有相互连系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length == 1) {
      return nums[0]
  }

  var val1 = max(nums.slice(1))
  var val2 = max(nums.slice(0, nums.length-1))
  return Math.max(val1, val2)
};

function max(nums) {
    var memo = [], len = nums.length
    if (len == 0) {
        return 0
    }
    memo[0] = nums[0]
    memo[1] = Math.max(nums[0], nums[1])
    for(var i=2;i<len;i++) {         
        memo[i] = Math.max(nums[i]+memo[i-2], memo[i-1])         
    }

   return memo[len-1]    
}

// 示例 1:

// 输入: [2,3,2]
// 输出: 3
// 解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。