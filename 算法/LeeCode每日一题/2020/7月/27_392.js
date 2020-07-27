/**
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
  var m = s.length -1, n = t.length - 1
  while(m >= 0 && n >= 0) {
      if (s[m] == t[n]) {
          m--
          n--
      } else {
          n--
      }
  }
  return m < 0
};

var isSubsequence = function(s, t) {
  var index = -1
 for(var c of s.split('')){
     index = t.indexOf(c, index+1)
     if (index == -1) {
         return false
     }
 }
 return true
};