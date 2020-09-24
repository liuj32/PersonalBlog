/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var len = s.length;
    var left = 0, right = len -1;
    var reg = /\w|\d/;
    while (left < right) {
        if (!reg.test(s[left])) {
            left++;
            continue;
        }
        if (!reg.test(s[right])) {
            right--;
            continue;
        }        
        if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};


var str = "A man, a plan, a canal: Panama"
var result = isPalindrome(str)

console.log(result)

