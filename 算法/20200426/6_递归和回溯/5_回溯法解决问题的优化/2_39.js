/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的数字可以无限制重复被选取。
说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var res = []
var combinationSum = function(candidates, target) {
    res = []
    if (candidates.length == 0) {
        return res;
    }
    help(candidates, target,0, [])
    
    return res;
};

function help(candidates, target, start, temp) {
    if(target == 0) {
        res.push([...temp])
        return
    }
    if (target < 0) {
        return;
    }
    for(var i=start;i<candidates.length;i++) {
        temp.push(candidates[i])
        help(candidates, target - candidates[i],i, temp)
        temp.pop()
    }
}



// 示例 1:

// 输入: candidates = [2,3,6,7], target = 7,
// 所求解集为:
// [
//   [7],
//   [2,2,3]
// ]
// 示例 2:

// 输入: candidates = [2,3,5], target = 8,
// 所求解集为:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]
