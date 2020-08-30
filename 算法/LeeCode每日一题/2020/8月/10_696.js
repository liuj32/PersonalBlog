/**
 * 696. 计数二进制子串
 * 
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var last = 0, cur = 1
    var res = 0
    for(var i=1;i<s.length;i++) {
        if (s[i] == s[i-1]) {
            cur++
        } else {
            last = cur
            cur = 1;
        }
        if (last >= cur) res++
    }
    return res
};