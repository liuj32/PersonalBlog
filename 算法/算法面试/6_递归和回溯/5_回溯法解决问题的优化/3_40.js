/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var res = []
var combinationSum2 = function(candidates, target) {
    res = []
    if (candidates.length == 0) {
        return res
    }

    candidates.sort((a, b) => a -b)
    help(candidates, target, 0, [])
    return res
};

function help(candidates, target,start, temp) {
    if(target == 0) {
        res.push([...temp])
        return
    }

    if(target < 0) {
        return 
    }
    var history = {}
    for(var i=start;i<candidates.length;i++) {
        if(!history[candidates[i]]) {
            temp.push(candidates[i])
            help(candidates, target - candidates[i], i+1, temp)
            temp.pop()

            history[candidates[i]] = true
        }
    }
}