/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (s.length === 0) {
      return []
    }
  
    var res = []
    dfs(s, 0, [], res)
    return res
  };
  
  function dfs(s, startIndex, temp, res) {
    var m = s.length
    if (startIndex === m) {
      res.push([...temp])
      return
    }
  
    for(var j=1;j<=m-startIndex;j++) {
      var tempStr = s.substr(startIndex, j)
      if (!isReverseStr(tempStr)) {
        continue
      }
      temp.push(tempStr)
      dfs(s, startIndex + j, temp, res)
      temp.pop()
    }
  }
  
  function isReverseStr(s) {
    var l = 0
    var r = s.length - 1
    while(l < r) {
      if (s[l] !== s[r]) {
        return false
      }
      l++
      r--
    }
    return true
  }


  // dp预处理 + dfs
  var partition = function(s) {
    var m = s.length
    var g = new Array(m).fill(0).map(() => new Array(m).fill(true))
    for(var i=m-1;i>=0;i--) {
      for(var j=i+1;j<m;j++) {
        g[i][j] = (s[i] == s[j]) && g[i+1][j-1]
      }
    }
  
    var dfs = (i) => {
      if (i === m) {
        res.push([...temp])
        return
      }
  
      for(var j=i;j<m;j++) {
        if (g[i][j]) {
          var str = s.slice(i, j+1)
          temp.push(str)
          dfs(j+1)
          temp.pop()
        }
      }
    }
  
    var res = [], temp = []
    dfs(0)
    return res
  };