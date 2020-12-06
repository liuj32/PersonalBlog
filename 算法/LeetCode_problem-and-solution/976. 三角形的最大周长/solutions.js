/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    if (A.length < 3) {
      return 0
    }
    A.sort((a, b) => b - a)
    var i = 0
    while(i < A.length - 2) {
      if ((A[i] < A[i+1] + A[i+2])) {
        return A[i] + A[i+1] + A[i+2]
      } else {
        i++
      }
    }
    return 0
  
  };