/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var n = nums.length
    var reverseCount = 0
    var prevNum = nums[n-1]
    for(var i=n-2;i>=0;i--) {
        if (nums[i] > prevNum) {
            reverseCount++
        } else {
          prevNum = nums[i]
        }
        if (reverseCount > 1) {
            break
        }
    }
    var count = 0
    prevNum = nums[0]
    for(var i=1;i<n;i++) {
        if (nums[i] < prevNum) {
            count++
        } else {
          prevNum = nums[i]
        }
        if (count > 1) {
            break
        }
    }
    return Math.min(count, reverseCount) <= 1
};