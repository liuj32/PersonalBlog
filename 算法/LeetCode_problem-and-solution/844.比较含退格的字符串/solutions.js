/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// 栈 o(M+N)
var backspaceCompare = function(S, T) {
    const backspace = (str) => {
        var res = []
        var i = 0, j = 0
        for(var c of str) {
            if(c === '#') {
                res.pop()
            } else {
                res.push(c)
            }
        }
        return res.join('')
    }
    var str1 = backspace(S)
    var str2 = backspace(T)
    return str1 === str2
};

// 双指针
var backspaceCompare = function(S, T) {
    var i = S.length-1, j = T.length-1
    var iSpace = 0, jSpace = 0
    while(i >= 0 || j >= 0) {
        while(S[i] === '#' && i>= 0) {
            iSpace++
            i--
            while(iSpace > 0 && S[i] != '#') {
                iSpace--
                i--
            }
        }

        while(T[j] === '#' && j>=0) {
            jSpace++
            j--
            while(jSpace > 0 && T[j] != '#') {
                jSpace--
                j--
            }
        }
        if (i < 0 && j < 0) {
            return true
        }
        if (S[i] === T[j]) {
            i--
            j--
        } else {
            return false
        }
    }
    return true
};