/**
 * @param {number} N
 * @return {number}
 */
 var clumsy = function(N) {
    var stack = [N]
    N--
    var index = 0
    while(N > 0) {
        if (index % 4 === 0) {
            stack.push(stack.pop() * N)
        } else if (index % 4 === 1) {
            var num = stack.pop()
            stack.push(num > 0 ? Math.floor(num / N) : Math.ceil(num / N))
        } else if (index % 4 === 2) {
            stack.push(N)
        } else {
            stack.push(-N)
        }
        index++
        N--
    }
    var res = 0
    while(stack.length) {
        res += stack.pop()
    }
    return res
};