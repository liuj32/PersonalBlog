/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var len = flowerbed.length
    for(var i=0;i<len;i++) {
      if (
        flowerbed[i] === 0
        && (i-1 <0 || flowerbed[i-1] === 0)
        && (i+1 >= len || flowerbed[i+1] === 0)
      ) {
        flowerbed[i] = 1
        n--
      }
      if (n <= 0) {
        return true
      }
    }
  
    return false
  };