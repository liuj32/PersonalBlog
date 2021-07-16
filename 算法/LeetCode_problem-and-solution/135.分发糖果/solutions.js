/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var m = ratings.length
    var res = m
    var start = 0
    var i = 0
    var leftRecord = 0
    while(i<m-1) {
        start = i
        while(i+1<m && ratings[i] < ratings[i+1]) {
            // 递增
            i++
        }
        if (i > start) {
            res += (i-start) * (i-start+1) / 2
        }
        leftRecord = (i-start)
        start = i
        while(i+1 < m && ratings[i] > ratings[i+1] ) {
            // 递减
            i++
        }
        if (i > start) {
            res += (i-start) * (i-start+1) / 2
        }
        // 计算差值防止多记数
        if (leftRecord > 0 && i-start > 0) {
            res -=  Math.min(i - start, leftRecord)
        }

        while(i+1 < m && ratings[i] === ratings[i+1]) {
          i++
        }
    }

    return res
};