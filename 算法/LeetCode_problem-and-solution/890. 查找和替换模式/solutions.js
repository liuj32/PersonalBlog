/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    var record = new Map()
    var patternArr = []
    var idx = 0
    for(var i=0;i<pattern.length;i++) {
        if (!record.has(pattern[i])) {
            record.set(pattern[i], idx)
            idx++
        }
        patternArr[i] = record.get(pattern[i])
    }

    var res = []
    for(var i=0;i<words.length;i++) {
        var tempMap = new Map()
        var idx = 0
        var flag = true
        for(var j=0;j<words[i].length;j++) {
            if(!tempMap.has(words[i][j])) {
                tempMap.set(words[i][j], idx)
                idx++
            }
            if (tempMap.get(words[i][j]) != patternArr[j]) {
                flag = false
                break
            }
        }

        if (flag) {
            res.push(words[i])
        }
        
    }

    return res
};