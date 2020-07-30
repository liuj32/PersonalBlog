/**
 *  旋转数组的最小数字
 * 
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  var len = numbers.length
  if (len == 0) return null

  var left = 0, right = len -1
  while(left < right) {
      var midIdx = left + Math.floor((right - left) / 2)
      if (numbers[midIdx] < numbers[right]) {
         right = midIdx
      } else if (numbers[midIdx] > numbers[right]) {
          left = midIdx+1            
      } else {
          right -= 1
      }
  }
  return numbers[left]
};