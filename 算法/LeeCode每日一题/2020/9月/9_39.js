/**
 * 39. 组合总和
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    var dfs = (start, temp, k) => {
        if (temp.length === k) {
            if (temp.reduce((a, b) => a+b, 0) === target) {
               res.push([...temp])
            }
            return
        }

        for(var i=start;i<candidates.length;i++) {
            temp.push(candidates[i])
            dfs(i, temp, k)
            temp.pop()
        }
    }
    var res = []
    var maxNum = Math.floor(target / candidates[0])
    for(var i=1;i<=maxNum;i++) {
        dfs(0, [], i)
    }
    return res
}