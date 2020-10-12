/**
 * @param {string} s
 * @return {number}
 */
// 计数
var balancedStringSplit = function(s) {
    var res = 0
    var count_L = 0, count_R = 0
    for(var c of s) {
        if (c === 'L') {
            count_L++
        }
        if (c === 'R') {
            count_R++
        }
        if (count_L === count_R) {
            res++
            count_L = count_R = 0
        }
    }

    return res
};

// 栈(括号匹配通常解决方案为栈)
var balancedStringSplit = function(s) {
    var res = 0
    var stack = []
    for(var c of s) {
        if (
            stack.length === 0
            || c === stack[stack.length-1]
        ) {
            stack.push(c)
        } else {
            stack.pop()
        }

        if (stack.length === 0) {
            res++
        }
    }

    return res
};