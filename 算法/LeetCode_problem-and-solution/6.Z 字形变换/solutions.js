/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
      return s
    }
    var res = ''
    var rows = new Array(numRows).fill('')
    var goDowning = false
    var curRow = 0
    for(var i=0;i<s.length;i++) {
      rows[curRow] += s[i]
      if (curRow === 0 || curRow === numRows -1) goDowning = !goDowning
      curRow += goDowning ? 1 : -1
    }

    for(var row of rows) {
      res += row
    }

    return res
};