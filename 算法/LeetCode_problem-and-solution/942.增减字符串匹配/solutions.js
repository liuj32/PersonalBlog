/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    var res = []
    var N = S.length
    var min = 0, max = N
    for(var c of S) {
        if (c == 'I') {
            res.push(min)
            min++
        } else {
            res.push(max)
            max--
        }
    }
    res.push(min)
    
    return res
};