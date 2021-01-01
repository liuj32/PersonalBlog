/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    var len = intervals.length
    if (len < 2) {
      return 0
    }
    intervals.sort((a, b) => {
      return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
    })
    var res = 1
    var prev = 0, i = 1
    while(i<intervals.length) {
      if (intervals[i][0] >= intervals[prev][1]) {
        res++
        prev = i
      } else {
        i++
      }
    }
 
    return len - res
 };