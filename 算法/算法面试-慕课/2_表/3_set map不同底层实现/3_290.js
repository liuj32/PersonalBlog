/**
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {  
  var strArr = str.split(' ');
  if (pattern.length !== strArr.length) return false;
  
  var recordMap = new Map();
  var recordSet = new Set()
  for (var i=0; i< pattern.length;i++) {
      if (!recordMap.has(pattern[i])) {
          if (recordSet.has(strArr[i])) {
              return false;
          }
          recordSet.add(strArr[i]);
          recordMap.set(pattern[i], strArr[i])
      } else {
          if (recordMap.get(pattern[i]) !== strArr[i]) {
              return false;
          }
      }
  }

  return true;
};


var pattern = "abba"
var str  = "dog cat cat dog"

var result = isIsomorphic(pattern, str);
console.log(result)
