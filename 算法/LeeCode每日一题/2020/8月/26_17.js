/**
 * 17. 电话号码的字母组合
 * 
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if (digits.length == 0) {
        return []
    }

    var map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    var dfs = (k, child) => {
        if (child.length === digits.length) {
            ans.push(child)
            return
        }
        for(var i=0;i<map[digits[k]].length;i++) {
            dfs(k+1, child + map[digits[k]][i])
        }
    }
    
    var ans = []
    dfs(0, [])
    return ans
};
