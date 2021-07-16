/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var recordMap = new Map()
    var recordSet = new Set()
    var arr = str.split(' ')
    if(pattern.length !== arr.length) {
      return false
    }
    for(var i=0;i<pattern.length;i++) {
      if (recordMap.has(pattern[i])) {
        var value = recordMap.get(pattern[i])
        if (value !== arr[i]) {
          return false
        }
      } else if(recordSet.has(arr[i])){
        return false
      } else {
        recordMap.set(pattern[i], arr[i])
        recordSet.add(arr[i])
      }
    }
    
    return true
  };