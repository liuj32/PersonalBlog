/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    var n = cardPoints.length
    var sum = cardPoints.reduce((a, b) => a + b, 0)
    var l = 0, r = n - k
    var minSum = 0
    for(var i=0;i<r;i++) {
      minSum += cardPoints[i]
    }
    for(r;r<n;r++) {
      tempSum += cardPoints[r]
      tempSum -= cardPoints[l]
      l++
      minSum = Math.min(slideWindow, tempSum)
    }

    return sum - minSum
  };