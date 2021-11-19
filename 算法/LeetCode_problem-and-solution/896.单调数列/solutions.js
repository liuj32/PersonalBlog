/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var ins = true, dec = true
    var m = A.length
    for(var i=0;i<m-1;i++) {
      if (A[i] < A[i+1]) {
        dec = false
      }
      if (A[i] > A[i+1]) {
        ins = false
      }
      if(!dec && !ins) {
        return false
      }
    }
    return dec || ins
};