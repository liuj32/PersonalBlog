/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var record = new Map();
  var len = strs.length;

  for (var i=0;i<len;i++) {
      var k = strs[i].split('').sort().join('');
      if (record.has(k)) {
          var value = record.get(k);
          value.push(strs[i]);
          record.set(k, value);
      } else {
          record.set(k, [strs[i]]);
      }
  }

  return [...record.values()];
};

/**
  输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
  输出:
  [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]

 */