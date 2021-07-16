/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var recordMap = new Map()
    var len = s.length
    for(var i=0;i<len;i++) {
        if (recordMap.has(s[i])) {
            var value = recordMap.get(s[i])
            recordMap.set(s[i], ++value)
        } else {
            recordMap.set(s[i], 1)
        }
    }

    for(var i=0;i<len;i++) {
        if (recordMap.get(s[i]) === 1) {
            return i
        }
    }
    return -1
};