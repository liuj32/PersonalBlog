/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
 * @param {character[][]} grid
 * @return {number}
 */

var record = [[]]
var res = 0
var range = [[]]
var numIslands = function(grid) {
    record = []
    res = 0
    range = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    for(var i=0;i<grid.length;i++) {
        record[i] = []
    }
    for(var i=0;i<grid.length;i++) {
        for(var j=0;j<grid[i].length;j++) {
            if (!record[i][j]) {
              res += search(grid, i, j)
            }
        }
    }

    return res
};

function search(grid, startX, startY) {
    if (grid[startX][startY] == 0) {
        return 0
    }

    for(var i=0;i<range.length;i++) {
        var newX = startX + range[i][0]
        var newY = startY + range[i][1]

        if (isRange(grid, newX, newY) && !record[newX][newY] && grid[startX][startY] == 1) {
            record[newX][newY] = true
            search(grid, newX, newY)
        }

    }
    
    return 1;
}

function isRange (grid, startX, startY) {
    var m = grid.length;
    var n = grid[0].length;
    return startX >= 0 && startX < m && startY >= 0 && startY < n
}


// 示例 1:

// 输入:
// 11110
// 11010
// 11000
// 00000
// 输出: 1
// 示例 2:

// 输入:
// 11000
// 11000
// 00100
// 00011
// 输出: 3
// 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。