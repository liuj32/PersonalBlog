/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var right = 0, len = strs.length;
  if (len == 0) {
      return ''
  }
  while(right < strs[0].length) {
      var cur = strs[0][right], i;
      for(i=1;i<len;i++) {
         if (cur != strs[i][right] ) {
             break;
         }
      }

      if (i !== len) {
          break;
      } else {
          right++
      }
  }
  return strs[0].slice(0, right)
};


// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。