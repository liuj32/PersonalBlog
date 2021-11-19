/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    var diff = []
    var n = s.length
    for(var i=0;i<n;i++) {
        diff.push(Math.abs(s[i].charCodeAt() - t[i].charCodeAt()))
    }
    var maxLength = 0
    var sum = 0
    var start, end 
    start = end = 0
    while(end < n) {
        sum += diff[end]
        while(sum > maxCost) {
            sum -= diff[start]
            start++
        }
        maxLength = Math.max(maxLength, end - start + 1)
        end++
    }
    return maxLength
};