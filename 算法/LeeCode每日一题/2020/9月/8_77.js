/**
 * 77. 组合
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var dfs = (start, temp) => {
      if (temp.length == k) {
          res.push([...temp])
          return
      }
      for(var i=start;i<=n;i++) {
          temp.push(i)
          dfs(i+1, temp)
          temp.pop()
      }
  }

  var res = []
  dfs(1, [])
  return res
};