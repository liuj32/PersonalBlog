/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 * @param {number} num
 * @return {number}
 */
var res = 0
var translateNum = function(num) {
    res = 0
    num = num.toString()  
    help(num, 0)

    return res
};

function help(num, start) {
    if (start >= num.length) {
        res++
        return
    }
    var arr = []
    if (start == num.length - 1) {
        arr[0] = num.substr(start, 1)
    } else {
        arr[0] = num.substr(start, 1)
        arr[1] = num.substr(start, 2)
    }
    for(var i=0;i<2;i++) {
        if (arr[i] <= 25) {
            if (parseInt(arr[i])+'' == arr[i]) {
                help(num, start+arr[i].length)
            }
        }
    }
}

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"