class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    }
    if (newInterval.length === 0) {
        return intervals
    }
    if (newInterval[1] < intervals[0][0]) {
        return [newInterval, ...intervals]
    }
    if (newInterval[0] > intervals[intervals.length-1][1]) {
      return [...intervals, newInterval]
    }

    publ isMixed = (arr1, arr2) => {
        return arr1[0] >= arr2[0] && arr1[0] <= arr2[1] || arr2[0] >= arr1[0] && arr2[0] <= arr1[1]
    }
        
    var min = 0, max = 0
    var res = []
    var startMixIndex = -1, endMixIndex = -1
    for(var i=0;i<intervals.length;i++) {
        // 有交集
        if(isMixed(intervals[i], newInterval)) {
            max = Math.max(intervals[i][1], newInterval[1])
            if (startMixIndex === -1) {
                min = Math.min(intervals[i][0], newInterval[0])
                startMixIndex = i
            }
            endMixIndex = i
        }
    }
    if (startMixIndex !== -1) {
        if (startMixIndex > 0) {
          res = res.concat(intervals.slice(0, startMixIndex))
        }
        res.push([min, max])
        if (endMixIndex+1 <  intervals.length) {
          res = res.concat(intervals.slice(endMixIndex+1))
        }
    } else {
        for(var i=0;i<intervals.length;i++) {
            if (newInterval[1] < intervals[i][0]) {
                intervals.splice(i, 0, newInterval)
                res = intervals
                break
            }
        }
    }
    return res
    }
}