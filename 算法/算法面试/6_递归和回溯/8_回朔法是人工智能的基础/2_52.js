/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 * @param {number} n
 * @return {number}
 */
var res = 0
var cols = [], dia1 = [], dia2 = []
var totalNQueens = function(n) {
    res = 0
    cols = [], dia1 = [], dia2 = []

    nQueens(n, 0)
    return res;
};

function nQueens(n, index) {
    if (index == n) {
        res++
        return 
    }

    for(var i=0;i<n;i++) {
        if (!cols[i] && !dia1[index+i] && !dia2[i-index + n-1]) {
            cols[i] = true
            dia1[index+i] = true
            dia2[i-index + n-1] = true
            nQueens(n, index+1)
            cols[i] = false
            dia1[index+i] = false
            dia2[i-index + n-1] = false            
        }
    }
}


// 示例:

// 输入: 4
// 输出: 2
// 解释: 4 皇后问题存在如下两个不同的解法。
// [
//  [".Q..",  // 解法 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // 解法 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]