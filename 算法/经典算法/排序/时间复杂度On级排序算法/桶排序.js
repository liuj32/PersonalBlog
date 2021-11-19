// lc 908 https://leetcode-cn.com/problems/smallest-range-i/
// lc 164 https://leetcode-cn.com/problems/maximum-gap/
// lc 451 https://leetcode-cn.com/problems/sort-characters-by-frequency/solution/gen-ju-zi-fu-chu-xian-pin-lu-pai-xu-by-l-zmvy/



/**
 * lc451
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    var map = new Map()
    var m =  s.length
    var maxFrequency = 0
    for(var i=0;i<m;i++) {
        var frequency = (map.get(s[i]) || 0) + 1
        maxFrequency = Math.max(maxFrequency, frequency)
        map.set(s[i], frequency)
    }
    var buckets = new Array(maxFrequency+1).fill(0).map(() => [])
    for(var [ch, count] of map.entries()) {
        buckets[count].push(ch)
    }
    var res =  []
    for(var i=maxFrequency;i>=0;i--) {
        var bucket = buckets[i]
        for(var ch of bucket) {
            for(var k=0;k<i;k++) {
                res.push(ch)
            }
        }
    }
    return res.join('')
};

// 时间复杂度通茶On, 空间复杂度On