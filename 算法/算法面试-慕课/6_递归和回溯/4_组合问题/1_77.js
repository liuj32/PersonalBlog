/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var res = []
var combine = function(n, k) {
    res = []
    if (n == 0) {
        return []
    }

    help(n, k, 1, [])
    return res
};

function  help(n, k, start, temp) {
    if (temp.length == k) {
        res.push(temp)
        return
    }

    for(var i=start;i<=n;i++) {
        help(n, k,i + 1, temp.concat(i))
    }
}


// 示例:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
