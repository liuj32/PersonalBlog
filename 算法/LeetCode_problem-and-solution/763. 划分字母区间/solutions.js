/**
 * @param {string} S
 * @return {number[]}
 */
// 暴力
var partitionLabels = function(S) {
    var map = {}
    for(var c of S) {
        if (map[c]) {
            map[c]++
        } else {
            map[c] = 1
        }
    }
    var res = []
    var j = 0
    var child = []
    for(var i=0;i<S.length;i++) {
        var flag = true
        for(var k=0;k<child.length;k++) {
            if(map[child[k]] > 0) {
                flag = false
                break
            }
        }
        if (flag && (i - j) > 0) {
            var childLen = i - j
            res.push(childLen)
            j = i
            child = []
            child.push(S[i])
        } else {
            if(child.indexOf(S[i]) === -1) {
                child.push(S[i])
            }
        }
        map[S[i]]--
    }
    res.push(i-j)

    return res
};

// 优化
