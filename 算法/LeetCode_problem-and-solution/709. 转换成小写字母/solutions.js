/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var res = []
    for(var c of str) {
        if (c >= 'A' && c <= 'Z') {
            var exchangeC = String.fromCharCode(c.charCodeAt() + 32)
            res.push(exchangeC)
        } else {
            res.push(c)
        }
    }
    return res.join('')
};