/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var m = board.length
    var n = board[0].length
    // 约定死的活了为2，活的死了为-1
    for(var i=0;i<m;i++) {
      for(var j=0;j<n;j++) {
        var liveCount = lifeCount(board, i, j)
        // 死亡状态
        if (board[i][j] === 0) {
          if (liveCount === 3) board[i][j] = 2 // 标记死的活了为2
        } else {
          // 活状态
          if (liveCount < 2) board[i][j] = -1 // 标记活的死了为-1
          else if (liveCount === 2 || liveCount === 3) board[i][j] = 1
          else if (liveCount > 3) board[i][j] = -1 // 标记活的死了为-1
        }
      }
    }
  
    for(var i=0;i<m;i++) {
      for(var j=0;j<n;j++) {
        if(board[i][j] === 2) board[i][j] = 1
        else if (board[i][j] === -1) board[i][j] = 0
      }
    }  
  };
  
  
  // 一个细胞周围活细胞数量
  function lifeCount(board, x, y) {
    var rows = board.length
    var cols = board[0].length
    var count = 0
    var dirs = [
      [-1, 0], [1, 0], // x轴
      [0, -1], [0, 1], // y轴
      [-1, -1], [-1, 1],[1, -1], [1, 1] // 斜方向
    ]
    for(var dir of dirs) {
      var newX = dir[0] + x
      var newY = dir[1] + y
      if (
        newX >= 0 && newX < rows
        && newY >= 0 && newY < cols
        && Math.abs(board[newX][newY]) === 1
      ) {
        count++
      }
    }
  
    return count
  }