/**
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
 * @param {number[][]} intervals
 * @return {number}
 */

 /** 动态规划 */
var eraseOverlapIntervals = function(intervals) {
  var len = intervals.length
  if (len == 0) {
    return 0
  }
  intervals.sort((a, b) => a[0] - b[0])
  var memo = [1]
   for(var i=1;i<len;i++) {
     memo[i] = 1
     for(var j=0;j<i;j++) {
       if (intervals[i][0] >= intervals[j][1]) {
         memo[i] = Math.max(1+memo[j], memo[i])
       }
     }
   }

   return len - Math.max(...memo)
};

 /** 贪心 */
var eraseOverlapIntervals = function(intervals) {
  var len = intervals.length
  if (len == 0) {
    return 0
  }
  intervals.sort((a, b) => {
    if (a[1]  == b[1]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })
  var res = 1, pre = 0
  for(var i=1;i<len;i++) {
      if (intervals[i][0] >= intervals[pre][1]) {
          res++
          pre = i
      }
  }

   return len - res
};