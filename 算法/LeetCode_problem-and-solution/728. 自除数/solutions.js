/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var res = []
    while(left <= right) {
        var nums = left.toString().split('')
        var flag = true
        for(var i=0;i<nums.length;i++) {
            if (left % parseInt(nums[i]) != 0) {
                flag = false
                break
            }
        }
        if (flag) {
            res.push(left)
        }
        left++
    }

    return res
};