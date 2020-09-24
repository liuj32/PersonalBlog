/**
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * @param {number[]} nums
 * @return {number[][]}
 */

var res = [[]]
var subsetsWithDup = function(nums) {
    res = [[]]
    if (nums.length == 0) {
        return res;
    }
    nums.sort((a, b) => a - b)
    for (var i=1;i<=nums.length;i++)
        help(nums, i, 0, [])

    return res
};

function help(nums, k, start, temp) {
    if (temp.length === k) {
        res.push([...temp])
        return
    }

    if ((k - temp.length) > (nums.length - start)) {
        return
    }

    var record = {}
    for(var i=start;i<nums.length;i++) {
        if (!record[nums[i]]) {
            temp.push(nums[i])
            help(nums, k,i+1, temp)
            temp.pop()
            record[nums[i]] = true
        }

    }
}


// 示例:

// 输入: [1,2,2]
// 输出:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]