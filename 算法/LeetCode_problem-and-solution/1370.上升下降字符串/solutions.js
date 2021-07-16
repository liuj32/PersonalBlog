/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    var res = ''
    var len = s.length;
    var i = 0
    var recordArr = []
    for(var c of s) {
        var idx = c.charCodeAt() - 97
        if (!recordArr[idx]) {
            recordArr[idx] = 0
        }
        recordArr[idx] += 1
    }

    while (res.length < len) {
        // 1,2,3
        var i = 0
        while(i < recordArr.length) {
            if (recordArr[i]) {
                res +=  String.fromCharCode(i  + 97)
                recordArr[i]--
            }
            i++
        }
        // 4,5,6
        var j = recordArr.length - 1
        while(j >= 0) {
            if (recordArr[j]) {
                res += String.fromCharCode(j  + 97)
                recordArr[j]--
            }
            j--
        }
    }

    return res;
};
