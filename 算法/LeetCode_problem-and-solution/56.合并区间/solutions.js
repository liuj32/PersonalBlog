/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var len = intervals.length
    if (len < 2) {
      return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    var res = []
    res.push(intervals[0])
    for(var i=1;i<len;i++) {
      var curInterval = intervals[i]
      var peek = res[res.length - 1]
  
      if (curInterval[0] > peek[1]) {
        res.push(curInterval)
      } else {
        peek = Math.max(peek[1], curInterval[1])
      }
    }
  
    return res
  };