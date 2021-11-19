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

  // O(1)空间复杂度，不考虑返回值的空间复杂度
  var getRow = function(rowIndex) {
    var res = new Array(rowIndex+1).fill(0)
    for(var i=0;i<=rowIndex;i++) {
      res[0] = 1
      for(var j=i;j>0;j--) {
        res[j] += res[j-1]
      }
    }
    return res
  };