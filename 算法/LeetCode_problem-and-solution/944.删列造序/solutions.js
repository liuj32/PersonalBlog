/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    var res = 0
    for(var i=0;i<A[0].length;i++) {
        for(var j=0;j<A.length-1;j++) {
            if(A[j][i] > A[j+1][i]) {
                res++
                break
            }
        }
    }
   return res
};