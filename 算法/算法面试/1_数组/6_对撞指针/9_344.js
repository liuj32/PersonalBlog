/**
 * 将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var len = s.length;
    var left = 0, right = len - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};


var str = ["h","e","l","l","o"]
var result = reverseString(str)

console.log(str)

