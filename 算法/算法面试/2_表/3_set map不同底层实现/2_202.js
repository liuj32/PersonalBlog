/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 1) return true;

  var numsStr, numArr, result = n;
  var record = new Set();
  record.add(n);
  while (result !== 1) {
      numsStr = result.toString();
      numArr = numsStr.split('');
      result = 0;
      for (var i=0;i < numArr.length;i++) {
          result += parseInt(numArr[i]) * parseInt(numArr[i]);
      }
      if (record.has(result)) {
          return false;
      }
      record.add(result);
  }

  return true;
};


var s = "ab"
var t = "a"

var result = isHappy(19);
console.log(result)