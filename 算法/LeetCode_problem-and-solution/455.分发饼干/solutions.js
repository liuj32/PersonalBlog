/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var i=0, j=0
    var ilen = g.length, jlen = s.length
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    while(i < ilen && j < jlen) {
        if (s[j] >= g[i]) {
            i++
        }
        j++
    }

    return i
};