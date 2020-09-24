/**
 * 40. 组合总和 II
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    var dfs = (start, temp, sum) => {
        if (sum === 0) {
            res.push([...temp])
            return
        }
        if (sum < 0) {
            return
        }
        var record = []
        for(var i=start;i<candidates.length;i++) {
            if (record.indexOf(candidates[i]) === -1) {
              record.push(candidates[i])
              temp.push(candidates[i])
              dfs(i+1, temp, sum - candidates[i])
              temp.pop()
            }
  
        }
    }
    var res = []
    dfs(0, [], target)
    return res
  };