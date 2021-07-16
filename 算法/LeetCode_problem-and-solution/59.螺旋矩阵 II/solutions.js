/**
 * @param {number} n
 * @return {number[][]}
 */

// 一：
var generateMatrix = function(n) {
    var num = 0;
    var diff = -1
    var row = 0, col = -1
    var matrix = []
    for(var i = 0;i<n;i++) {
        matrix[i] = []
    }
    while(num < n * n) {
        // 列
        diff = diff * -1
        for(var i=col+diff;i<n && i>=0;i += diff) {
            if (matrix[row][i]) {
                break
            }
            matrix[row][i] = ++num
        }
        col = i - diff

        // 行
        for(var j=row+diff;j<n && j>=0;j += diff) {
            if(matrix[j][col]) {
                break
            }
            matrix[j][col] = ++num
        }
        row = j - diff
    }

    return matrix
};

// 二：
var generateMatrix = function(n) {
    var l = 0, t = 0, r = n-1, b = n - 1
    var num = 1, max = n * n
    var matrix = []
    for(var i=0;i<n;i++) matrix[i] = []
    while(num <= max) {
        for(var i=l;i<=r;i++) matrix[t][i] = num++
        t++
        for(var i=t;i<=b;i++) matrix[i][r] = num++
        r--
        for(var i=r;i>=l;i--) matrix[b][i] = num++
        b--
        for(var i=b;i>=t;i--) matrix[i][l] = num++
        l++
    }

    return matrix
};