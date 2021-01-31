/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var res = ''
    var index = 0
    while(index < 13) {
      while(num >= nums[index]) {
        res += romanNum[index]
        num -= nums[index]
      }
      index++
    }
    return res
  };