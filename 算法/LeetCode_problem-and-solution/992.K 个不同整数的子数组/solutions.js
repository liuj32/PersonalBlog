/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    var n = A.length
    var num1 = new Array(n+1).fill(0)
    var num2 = new Array(n+1).fill(0)
    var total1 = 0, total2 = 0
    var left1 = 0, left2 = 0
    var right = 0
    var res = 0
    while(right < n) {
        if (num1[A[right]] === 0) {
            total1++
        }
        num1[A[right]]++
        if (num2[A[right]] === 0) {
            total2++
        }
        num2[A[right]]++
        while(total1 > K) {
            num1[A[left1]]--
            if (num1[A[left1]] === 0) {
                total1--
            }
            left1++
        }
        while(total2 > K - 1) {
            num2[A[left2]]--
            if (num2[A[left2]] === 0) {
                total2--
            }
            left2++
        }        
        res += left2 - left1
        right++
    }

    return res
};