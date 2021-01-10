/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    var m = s.length
    var res = []
    for (var i = 0, j = 0; j < m; j++) {
      if (s[j] != s[j + 1] || j === s.length - 1) {
        if (j - i >= 2) {
          res.push([i, j])
        }
        i = j + 1
      }
    }
  
    return res
  };