/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var dfs = (substr, left, right) => {
        if (left === n && right === n) {
            res.push(substr)
            return
        }
        if (left < right) {
            return
        }
        if (left < n) {
            dfs(substr + '(', left+1, right)
        }
        if (right < n) {
            dfs(substr + ')', left, right+1)
        }
    }

    var res = []
    dfs('', 0, 0)
    return res
};