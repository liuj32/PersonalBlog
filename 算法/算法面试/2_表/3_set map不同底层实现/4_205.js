/**
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。\
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var lenS = s.length;
  var lenT = t.length;
  if(lenS !== lenT) return false;

  var recordSet = new Set();
  var recordMap = new Map();
  for (var i=0; i < lenS;i++) {
      if (!recordMap.has(s[i])) {
          if (recordSet.has(t[i])) {
              return false;
          }
          recordMap.set(s[i], t[i]);
          recordSet.add(t[i]);
      } else if (recordMap.get(s[i]) !== t[i]){
          return false;
      }
  }

  return true;
};


var s = "egg"
var t = "add"

var result = isIsomorphic(s, t);
console.log(result)
