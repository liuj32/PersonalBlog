/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var record = new Map();
  for (var i=0;i<s.length;i++) {
      if (record.has(s[i])) {
          var value = record.get(s[i])
          record.set(s[i],  ++value);
      } else {
          record.set(s[i], 1);
      }
  }

  for(var i=0;i<t.length;i++) {
      if(record.get(t[i]) > 0) {
        var value = record.get(t[i])
          record.set(t[i],  --value);

          if (record.get(t[i]) === 0) {
            record.delete(t[i])
          }
      } else {
          return false;
      }
  }
  return record.size === 0;
};

var s = "ab"
var t = "a"

var result = isAnagram(s, t);
console.log(result)
