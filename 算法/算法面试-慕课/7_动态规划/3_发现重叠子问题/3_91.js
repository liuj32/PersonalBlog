/**
 * @param {string} s
 * @return {number}
 */

 /** 递归超时 */
var res = 0
var numDecodings = function(s) {
    res = 0
    if (s < 1){
        return res
    }
    help(s, 0)
    return res
};

function help(s, start) {
    if (start == s.length) {
        res++
        return 
    }
    if (start > s.length) {
        return 
    }

    var arr = []
    if (start == s.length-1) {
      arr[0] = s.substr(start, 1)
    } else {
        arr[0] = s.substr(start, 1)
        arr[1] = s.substr(start, 2)
    }
    for(var i=0;i<2;i++) {
        if (arr[i] <= 26 && arr[i] > 0) {
            if (parseInt(arr[i]).toString() ===  arr[i])
                help(s, start+arr[i].length)
        }
    }
}


/** 动态规划 */