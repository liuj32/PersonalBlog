/**
 * 最长公共子序列的长度
 * @param {*} s1 
 * @param {*} s2 
 */

function LCS(s1, s2) {
  var m = s1.length-1, n = s2.length-1
  return LCS(s1, s2, m, n)
}

function help(s1, s2, m, n) {
  var comLen = 0
  if (m == 0 || n ==0) {
    return 0
  }
  if(s1[m] == s2[n]) {
    comLen = 1 + LCS(s1, s2, m-1, n-1)
  }else {
    comLen = max(help(s1, s2, m-1, n), help(s1, s2, m, n-1))
  }

  return comLen
}