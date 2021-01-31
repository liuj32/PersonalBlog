/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var res = ''
  var carry = 0
  var i = a.length - 1
  var j = b.length - 1
  while(i >= 0 || j >= 0) {
    var num1 = Number(a[i] || '0')
    var num2 = Number(b[j] || '0')
    res = (num1 + num2 + carry) % 2 + res
    carry = parseInt((num1 + num2 + carry) / 2)
    i--
    j--
  }

  return carry ? carry + res : res
};