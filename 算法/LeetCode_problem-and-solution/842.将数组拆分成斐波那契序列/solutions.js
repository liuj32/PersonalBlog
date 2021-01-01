/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    var findFibonacci = (start, fibArr, prev, sum) => {
      if (start === S.length && fibArr.length >= 3) {
        res = [...fibArr]
        return true
      }
  
      for(var i=start;i<S.length;i++) {
        if (i > start && S[start] === '0') {
          break
        }
        var curr = S.slice(start, i+1) - '0'
        if (curr > maxNum) {
          break
        }
        if (fibArr.length >= 2) {
          if (curr < sum) {
            continue
          } else if (curr > sum) {
            break
          }
        }
        fibArr.push(curr)
        if (findFibonacci(i+1, fibArr, curr, curr + prev)) {
          return true
        }
        fibArr.pop()
      }
    }
  
    var res = []
    var maxNum = Math.pow(2, 31) - 1
    findFibonacci(0, [], 0, 0)
    return res
  };