/**
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length == 0) return false

  var rows = board.length, cols = board[0].length
  var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  var memo = [...Array(rows)].map(() => [])

  const dfs = (row, col, index, memo) => {
      if (index == word.length -1) {
          return board[row][col] == word[index]
      }

      if (board[row][col] ==  word[index]) {
          memo[row][col] = true
          for(var dir of dirs) {
              var newRow = row + dir[0], newCol = col + dir[1]
              if (newRow >= 0 && newRow < rows 
                  && newCol >= 0 && newCol < cols
                  && !memo[newRow][newCol]
                  && dfs(newRow, newCol, index+1, memo)) {
                  return true
              }
          }
          memo[row][col] = false
      }

      return false
  }

  for(var row = 0;row<rows;row++) {
      for(var col=0;col<cols;col++) {
          if (dfs(row, col, 0, memo)) {
              return true
          }
      }
  }    
  return false
};