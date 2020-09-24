/**
 * 定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var dirctiron = [[]]
var record = [[]]

var exist = function(board, word) {
    dirctiron = [[1, 0], [0, 1], [-1, 0], [0, -1]]

    for(var i=0;i<board.length;i++) {
        record[i] = []
    }
    for(var i=0;i<board.length;i++) {
        for(var j=0;j<board[i].length;j++) {
           if(search(board, word, 0, i, j)) {
               return true;
           }
        }
    }

    return false;
};


function search (board ,word, index, startX, startY) {

    if(index == word.length - 1)
        return word[index] === board[startX][startY]

    if (word[index] == board[startX][startY]) {
        record[startX][startY] = true;

        for(var i=0;i<dirctiron.length;i++) {
            var newX = startX + dirctiron[i][0]
            var newY = startY + dirctiron[i][1]

            if(isRange(board, newX, newY) && !record[newX][newY]
                && search(board, word, index+1, newX, newY)){
                    return true
                }
                
        }
        record[startX][startY] = false
    }

    return false
}

function isRange (board, startX, startY) {
    if (startX >= board.length || startX < 0) {
        return false
    }
    if (startY >= board[0].length || startY < 0) {
        return false
    }    

    return true
}

// 示例:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// 给定 word = "ABCCED", 返回 true
// 给定 word = "SEE", 返回 true
// 给定 word = "ABCB", 返回 false
