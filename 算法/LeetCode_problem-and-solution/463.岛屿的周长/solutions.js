/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var rows = grid.length, cols = grid[0].length
    var dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    var res = 0

    var isRange = (row, col) => {
        return row < rows && row >= 0 && col <cols && col >= 0
    }
    
    for(var row=0;row<rows;row++) {
        for(var col=0;col<cols;col++) {
           if (grid[row][col] === 1) {
               for(var i = 0;i<dir.length;i++) {
                   var newRow = row + dir[i][0], newCol = col + dir[i][1]
                   if (
                       !isRange(newRow, newCol)
                       || grid[newRow][newCol] !== 1
                    ) {
                        res++
                    }
               }
           }
        }
    }

    return res
};