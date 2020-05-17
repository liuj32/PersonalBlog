/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  let left = 0, right = 0;
  let longStr = ''
  let res = 0;
  while(left < len) {
    if (longStr.indexOf(s[right]) === -1) {
        longStr += s[right];
        right++;
    } else {
        longStr = longStr.slice(1);
        left++;
    }
    res = Math.max(res, longStr.length);
  }

  return res;
};

var str = "abcabcbb"
var result = lengthOfLongestSubstring(str)

console.log(result)

