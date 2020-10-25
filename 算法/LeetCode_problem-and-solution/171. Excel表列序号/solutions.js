/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var res = 0
    for(var i=0;i<s.length;i++) {
        res = res * 26  + s[i].charCodeAt() - 64
    }
    return res
};