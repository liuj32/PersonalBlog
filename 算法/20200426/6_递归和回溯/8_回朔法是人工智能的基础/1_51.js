/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * @param {number} n
 * @return {string[][]}
 */
var res = []
var cols = []
var dia1 = []
var dia2 = []
var solveNQueens = function(n) {
    res = []
    cols = []
    dia1 = []
    dia2 = []
    help(n, 0, [])

    return res;
};

function help(n, index, temp) {
    if (index === n) {
        res.push(arrToQueens(temp))
        return
    }

    for(var i=0;i<n;i++) {
        if (!cols[i] && !dia1[index+i] && !dia2[index-i+n -1]) {
            cols[i] = true
            dia1[index+i] = true
            dia2[index-i+n -1] = true
            temp.push(i)
            help(n, index+1,  temp)
            cols[i] = false
            dia1[index+i] = false
            dia2[index-i+n -1] = false             
            temp.pop()
        }
       
    }   
}


function arrToQueens (arr) {
    var temp = []
    var result = []
    for(var i=0;i<arr.length;i++) {
        temp[i] = '.'
    }
    for(var i=0;i<arr.length;i++) {
        var idxArr=  [...temp]
        idxArr[arr[i]] = 'Q'
        result[i] = idxArr.join('')
    }    

    return result
}




// 示例:

// 输入: 4
// 输出: [
//  [".Q..",  // 解法 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // 解法 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
// 解释: 4 皇后问题存在两个不同的解法。
