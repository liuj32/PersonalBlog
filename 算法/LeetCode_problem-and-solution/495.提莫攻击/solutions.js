/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    var res = 0
    var prev = -1
    for(var i=0;i<timeSeries.length;i++) {
      if(timeSeries[i] > prev) {
        res += duration
      } else if (timeSeries[i] === prev) {
        res += duration - 1
      } else {
        res += timeSeries[i] - timeSeries[i-1]
      }
      prev = timeSeries[i] + duration - 1
    }
    
    return res
  };