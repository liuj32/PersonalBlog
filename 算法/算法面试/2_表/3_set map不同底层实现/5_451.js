/**
 * 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  var recordMap = new Map();
  var result = '';
  for (var i=0;i<s.length;i++) {
      if (recordMap.has(s[i])) {
          var count = recordMap.get(s[i]);
          recordMap.set(s[i], ++count);
      } else {
          recordMap.set(s[i], 1);
      }
  }

  recordMap = [...recordMap].sort((a, b) => b[1] - a[1]);
  for (var i=0;i<recordMap.length;i++) {
      result += recordMap[i][0].repeat(recordMap[i][1])
  }

    return result;
};