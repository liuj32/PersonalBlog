/**
 * @param {number} n
 * @return {number[]}
 */

var printNumbers = function(n) { v       
    var ans = []
    var max = Math.pow(10, n)
    for(var i=1;i<max;i++) {
        ans.push(i)
    }
    return ans
};

// 大数用字符串表示
var printNumbers = function(n) {
    if(n < 1) return []
 
    var ans = []
    const help = (k, c) => {
        if (k > n) {
            var v = parseInt(c)
            if(v > 0) {
             ans.push(v)
            }
            return
        }
        for(var i=0;i<10;i++) {
             help(k+1, c+i)
        }
    }
    help(1, '')
    return ans
 };