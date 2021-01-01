/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var prev = []
    var res = []
    for(var i = 0;i<=rowIndex;i++) {
      prev = [...res]
      for(var j=1;j<prev.length;j++) {
        var value = prev[j] + prev[j-1]
        res[j] = value
      }
      res.push(1)
    }
  
    return res
  };