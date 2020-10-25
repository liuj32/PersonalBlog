/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num
    }
    var sum = 0
    while(num > 0) {
        var n = num % 10
        num = Math.floor(num / 10)
        sum += n
    }
    return addDigits(sum)
};

