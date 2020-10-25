/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var mapArr = []
    for(var i=0;i<A.length;i++) {
        var map = {}
        for(var c of A[i]) {
            if (map[c]) {
                map[c]++
            } else {
                map[c] = 1
            }
        }
        mapArr.push(map)
    }

    var res = []
    for(var c in mapArr[0]) {
        var count = mapArr[0][c]
        var flag = true
        for(var i=1;i<mapArr.length;i++) {
            if (mapArr[i][c] == null) {
                flag = false
                break
            }
            count = Math.min(count, mapArr[i][c])
        }
        if (flag) {
            for(var i=0;i<count;i++){
                res.push(c)
            }
        }
    }

    return res
};