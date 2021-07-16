/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    //    var numArr = []
    //    while(num > 0) {
    //        var n = num % 10
    //        num = Math.floor(num / 10)
    //        numArr.unshift(n)
    //    }
    
    //    for(var i=0;i<numArr.length;i++) {
    //        if (numArr[i] === 6) {
    //            numArr[i] = 9
    //            break
    //        }
    //    }
    //    var res = 0
    //     for(var i=0;i<numArr.length;i++) {
    //        res += numArr[i] * Math.pow(10, numArr.length - i - 1)
    //    }
    //    return res
        return Number(num.toString().replace('6', '9'))
    };