/**
 * 60. 第k个排列
 * 
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {

    var dfs = (str) => {
        if (str.length === n) {
            num++
            if (num === k) {
                return str
            } else {
                return
            }
        }
    
        for(var i=1;i<=n;i++) {
            if (str.indexOf(i + '') === -1) {
                var res = dfs(str + i)
                if (res) {
                    return res
                }
            }
        }
    }
    
    var nums = (n) => {
        if (n <= 1) {
            return n
        }
        return n * nums(n-1)
    }
    
    var start = 1, dum = nums(n-1)
    for(var i =1;i<=n;i++) {
        if (k <= i * dum) {
          start = i;
          break;
        }
    }
    
    var num = (start -1) * dum
    return dfs(start + '')
    };