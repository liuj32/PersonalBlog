/**
 * 415. 字符串相加
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var len1 = num1.length, len2 = num2.length
  var i = 0, j = 0, extra = 0
  var ans = ''
  while(i < len1 && j < len2) {
      var sum = parseInt(num1[len1-1 - i]) + parseInt(num2[len2-1 - j]) + extra
      if (sum >= 10) {
          extra = 1
          ans = sum-10 + ans
      } else {
          ans = sum + ans
          extra = 0
      }
      i++
      j++
  }
  while(i<len1) {
      var sum = parseInt(num1[len1-1-i]) + extra
      if(sum >= 10) {
          extra = 1
          ans = sum-10 + ans
      } else {
          extra = 0
          ans = sum + ans
      }
      i++
  }
  while(j<len2) {
      var sum = parseInt(num2[len2-1-j]) + extra
      if(sum >= 10) {
          extra = 1
          ans = sum-10 + ans
      } else {
          extra = 0
          ans = sum + ans
      }
      j++
  }
  if (extra == 1) {
      ans = extra + ans
  }
  return ans
};

var addStrings = function(num1, num2) {
  var i = num1.length -1, j = num2.length-1, carry = 0
  var ans = ''
  while(i>=0 || j>=0 || carry !=0) {
      if(i>=0) carry += num1[i--] - '0'
      if(j>=0) carry += num2[j--] - '0'
      ans = carry%10 + ans
      carry = parseInt(carry / 10)
  }
  return ans
};