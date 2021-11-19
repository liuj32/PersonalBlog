/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var recordMap = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    var res = 0
    var m = s.length
    for(var i=0;i<m;i++) {
      if (recordMap[s[i]] >= recordMap[s[i+1]] || i === m-1) {
        res += recordMap[s[i]]
      } else {
        res -= recordMap[s[i]]
      }
    }
  
    return res
  };