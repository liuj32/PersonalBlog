/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var len = m * n
    var idx = 0
    var res = []
    var row = 0, col = 0
    var top = 1, right = n - 1, bottom = m - 1, left = 0
    while (idx < len) {
        for(;col<=right;col++) res[idx++] = matrix[row][col] // top
        col--
        row++
        right--
        for(;row<=bottom;row++) res[idx++] = matrix[row][col] // right
        row--
        col--
        bottom--
        if (left <= right && top <= bottom) {
            for(;col>=left;col--) res[idx++] = matrix[row][col] // bottom
            col++
            row--
            left++
            for(;row>=top;row--) res[idx++] = matrix[row][col] // left
            row++
            col++
            top++
        }
    }

    return res
};