/**
 * 43. 字符串相乘
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1.length == 0 || num2.length == 0 || num2 == 0 || num1 == 0) return '0'
  
  if (num1.length < num2.length) {
      [num1, num2] = [num2, num1]
  }
  var len1 = num1.length, len2 = num2.length
  
  var arr = []
  for(var i=len2-1;i>=0;i--) {
      var str = '', mod = 0
      var zero = [...Array(len2-i-1)].map(() => 0).join('')
      for(j=len1-1;j>=0;j--) {
         str = (num1[j] * num2[i] + mod) % 10 + str
         mod =  Math.floor((num1[j] * num2[i] + mod) / 10)
          
      }
      str += zero
      if (mod) {
          str = mod + str
      }        
      arr.push(str)
  }
  
  if (arr.length == 1) return arr[0]
  var res = '', mod = 0
  for(var i= 0; i < arr[arr.length-1].length;i++) {
      var prev = 0
      for(var j=arr.length-1;j>=0;j--) {
          var len = arr[j].length
          if (len-i-1 < 0) {
              break;
          }
          prev = prev + parseInt(arr[j][len-i-1])
      }
      res = (prev + mod) % 10 + res
      mod =  Math.floor((prev + mod) / 10)    
  }

  return mod ? mod + res : res
};