/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var recordMap = new Map()
  var recordSet = new Set()
  for(var i=0;i<s.length;i++) {
    if (!recordMap.has(s[i])) {
      if (recordSet.has(t[i])) {
        return false
      }
      recordMap.set(s[i], t[i])
      recordSet.add(t[i])
    } else if (recordMap.get(s[i]) !== t[i]) {
      return false
    }
  }

  return true
};