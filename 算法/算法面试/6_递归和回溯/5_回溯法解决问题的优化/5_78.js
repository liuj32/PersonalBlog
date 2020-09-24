/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

  说明：解集不能包含重复的子集。
 * @param {number[]} nums
 * @return {number[][]}
 */
var res = []
var subsets = function(nums) {
    res = [[]]
    if(nums.length ==0) {
        return res;
    }

    for(var i=1;i<=nums.length;i++) {
        help(nums, i, 0, [])
    }
    return res;
};

function help(nums, k, start, temp) {
    if (temp.length == k) {
        res.push([...temp])
        return
    }

    for(var i=start;i<nums.length;i++) {
        temp.push(nums[i])
        help(nums, k, i+1, temp)
        temp.pop()
    }
}


// 示例:

// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]