/**
 * LCP 17. 速算机器人
 * 
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var cArr = s.split('')
    var x = 1, y = 0
    for (var c of cArr) {
        if (c == 'A') {
            x = 2 * x + y
        }
        if (c == 'B') {
            y = 2 * y + x
        }
    }
    return x + y
};