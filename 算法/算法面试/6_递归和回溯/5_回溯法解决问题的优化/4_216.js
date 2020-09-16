/**
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。 
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var res = []
var combinationSum3 = function(k, n) {
    res = []
    if (n <= 0 || k < 1 || k > 9) {
        return res
    }

    help(n, k, 1, [])
    return res
};

function help(n, k, start, temp) {
    if (n === 0 && temp.length == k) {
        res.push([...temp])
        return
    }

    if(n < 0 || temp.length >=k) {
        return
    }

    for(var i=start; i<=9;i++) {
        temp.push(i)
        help(n - i, k, i+1, temp)
        temp.pop()
    }
}


// 示例 1:

// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
// 示例 2:

// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]