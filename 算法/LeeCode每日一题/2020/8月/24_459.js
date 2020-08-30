/**
 * 459. 重复的子字符串
 * 
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var len = s.length
    for(var i = 1; i * 2 <= len; i++) {
        if (len % i == 0) {
            var match = true
            for(var j = i; j < len; j++) {
                if(s[j] != s[j - i]) {
                    match = false
                    break
                }
            }
            if (match) {
                return true
            }
        }
    }
 
    return false
 };

var repeatedSubstringPattern = function(s) {
    return (s + s).indexOf(s, 1) != s.length
};