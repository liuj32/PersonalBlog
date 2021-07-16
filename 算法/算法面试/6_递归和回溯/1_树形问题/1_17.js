/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * @param {string} digits
 * @return {string[]}
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

var res = []
 var letterCombinations = function(digits) {
    res = []
    if (digits.length == 0) {
        return []
    }
    help(digits, 0, '')
    return res;
};

function help(digits, index, s) {
    if (index == digits.length) {
        res.push(s)
        return
    }
    var record = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    
    var c = digits[index];
    var letters = record[c];
    for (var i=0;i<letters.length;i++) {
        help(digits, index+1, s+letters[i])
    }
}


// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].