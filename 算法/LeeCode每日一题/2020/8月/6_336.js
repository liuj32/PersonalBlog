/**
 * 回文对
 * 
 * @param {string[]} words
 * @return {number[][]}
 */

// 暴力
var palindromePairs = function(words) {

  const palindrome = (str) => {
      if (str == '') return true
      var l = 0, r = str.length-1
      while(l<r) {
          if (str[l] != str[r]) {
              return false
          }
          l++
          r--
      }
      return true
  }

  var ans = []
  for(var i=0;i<words.length;i++) {
      for(var j=0;j<words.length;j++) {
          if(i != j) {
              if(palindrome(words[i] +words[j])) {
                  ans.push([i, j])
              }
          }
      }
  }
  return ans
};



// 枚举前缀和后缀
var palindromePairs = function(words) {

  const palindrome = (str, l, r) => {
      if (l >= r) return true
      while(l<r) {
          if (str[l] != str[r]) {
              return false
          }
          l++
          r--
      }
      return true
  }

  const reverse = (str, l, r) => {
      var ans = ''
      while(r>=l) {
          ans += str[r]
          r--
      }
      return ans
  }

  var map = {}, ans = []
  for(var i=0;i<words.length;i++) {
      map[words[i]] = i
  }
  for(var i=0;i<words.length;i++) {
      if(words[i].length == 0) {
          continue
      }
      var m = words[i].length, word = words[i]

      for(var r=0;r<=words[i].length;r++) {
          if (r != 0 && palindrome(word, 0, r-1)){
          var idx = map[reverse(words[i], r, m-1)]
              if (idx != null && idx != i)
                  ans.push([idx, i])
          }
          if (palindrome(words[i], r, m-1)){
          var idx = map[reverse(words[i], 0, r-1)]
              if (idx != null && idx != i)
                  ans.push([i, idx])
          }
      }
  }
  return ans
};