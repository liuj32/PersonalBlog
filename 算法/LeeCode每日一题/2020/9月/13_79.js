/**
 * 79. 单词搜索 
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    var isRange = (row, col) => {
        return row >=0 && row < ilen && col >= 0 && col < jlen
    }    
    var dfs = (row, col, k) => {
        if (k === word.length) {
            return true
        }
        record[row][col] = true
        for(var dir of dirs) {
            var newRow = dir[0] + row, newCol = dir[1] + col
            if (
                isRange(newRow, newCol) &&
                !record[newRow][newCol] &&
                board[newRow][newCol] === word[k] &&
                dfs(newRow, newCol, k+1)
            ) {
                return true
            }
        }
        record[row][col] = false
        return false
    }
    var ilen = board.length, jlen = board[0].length
    var record = [...Array(ilen)].map(() => [])
    for(var i=0;i<ilen;i++) {
        for(var j=0;j<jlen;j++) {
            if (board[i][j] === word[0]) {
               if (dfs(i, j, 1)) {
                   return true
               }
            }
        }
    }
    return false
}