/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

 // 未解决

var res = []
var dirction = [[]]
var pacificAtlantic = function(matrix) {
    dirction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for(var i=0;i<matrix.length;i++) {
        for(var j=0;j<matrix[i].length;j++) {
            search(matrix, 0, i, j)
        }
    }

    return res;
};

function search (matrix, start, startX, startY) {
    var isFix = [false, false]

    for(var i=start;i<dirction.length;i++) {
        var newX = startX + dirction[i][0]
        var newY = startY + dirction[i][1]

        // if (!isRange(matrix, newX, newY)) {
        //     if (i < 2) {
        //         isFix[0] = true
        //     } else {
        //         isFix[1] = true
        //     }           
        //     continue
        // }
        if (isRange(matrix, newX, newY) 
            && matrix[startX][startY] >=  matrix[newX][newY]
            ) {
              search(matrix, i, newX, newY)
        }
    }

        if (isFix[0] && isFix[1]) {
            res.push([startX, startY])
        }
}

function isRange(matrix, x, y) {
    var m = matrix.length;
    var n = matrix[0].length;
    return x >= 0 && x < m &&  y>=0 && y < n
}