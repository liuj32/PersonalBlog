/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    var slope = (coordinates[1][0] - coordinates[0][0]) / (coordinates[1][1] - coordinates[0][1])
    var noExitSlope = coordinates[1][1] - coordinates[0][1]
    for(var i=2;i<coordinates.length;i++) {
      var x1 = coordinates[i][0] - coordinates[i-1][0]
      var y1 = coordinates[i][1] - coordinates[i-1][1]
      if (noExitSlope === 0 && y1 === 0) {
        continue
      }
      if (x1 / y1 != slope) {
        return false
      }
    }
  
    return true
  };