/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    var i = 0
    var res = []
    var aLen = A.length, kLen = K.length
    var carry = 0
    while(i < aLen || K) {
      var a = A[aLen - i - 1] || 0
      var b = K % 10
      res.unshift((a + b + carry) % 10)
      carry = Math.floor((a + b + carry) / 10)
      i++
      K = Math.floor(K / 10)
    }
    if (carry) {
      res.unshift(carry)
    }
    return res
}