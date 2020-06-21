/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// 未解决

var record = [[]]
var dirction = []
var solve = function(board) {
    dirction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for(var i=0;i<board.length;i++) {
        record[i] = []
    }
    for(var i=0;i<board.length;i++) {
        for(var j=0;j<board[i].length;j++) {
            if (!record[i][j] && board[i][j] == 'O') {
                dfs(board, i, j)
            }
        }
    }

    return board
};

function dfs (board, startX, startY) {
    if (board[startX][startY] == 'X' || record[startX][startY]) {
        return true
    }
    
    record[startX][startY] = true
    for(var i=0;i<dirction.length;i++) {
        var newX = startX + dirction[i][0]
        var newY = startY + dirction[i][1]        
        if (isRange(board, newX, newY) 
            && dfs(board, newX, newY)) {            
        } else {
            record[startX][startY] = false
            return false
        }
        
    }
    
    board[startX][startY] = 'X'
    return true;
}

function isRange (board, startX, startY) {
    var m = board.length;
    var n = board[0].length;

    return startX >= 0 && startX < m && startY >= 0 && startY < n    
}