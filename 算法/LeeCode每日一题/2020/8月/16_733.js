/**
 * 733. 图像渲染
 * 
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var rows = image.length, cols = image[0].length
    var dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    var record = [...Array(rows)].map(() => [])

    const isRange = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return false
        }
        return true
    }
    var dfs = (row, col) => {
        record[row][col] = true
        for(var dir of dirs) {
            var newRow = row+dir[0], newCol = col + dir[1]
            if (
                isRange(newRow, newCol) &&
                !record[newRow][newCol] &&
                image[newRow][newCol] == image[sr][sc]                
            ) {
                dfs(newRow, newCol)
            }
        }
    }

    dfs(sr, sc)
    for(var i=0;i<rows;i++) {
        for(var j=0;j<cols;j++) {
            if(record[i][j]) {
                image[i][j] = newColor
            }
        }
    }

    return image
};


var floodFill = function(image, sr, sc, newColor) {
    var rows = image.length, cols = image[0].length

    var dfs = (row, col, num) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || image[row][col] == newColor || image[row][col] != num) {
           return 
        }

        var temp = image[row][col]
        image[row][col] = newColor
        dfs(row+1, col, temp)
        dfs(row-1, col, temp)
        dfs(row, col+1, temp)
        dfs(row, col-1, temp)
    }

    dfs(sr, sc, image[sr][sc])
    return image
};