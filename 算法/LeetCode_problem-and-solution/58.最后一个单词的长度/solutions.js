/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var n = s.length
  var count = 0
  for(var j=n-1;j>=0;j--) {
    if (s[j] === ' ') {
      if (count === 0) continue
      break
    }
    count++
  }

  return count
};