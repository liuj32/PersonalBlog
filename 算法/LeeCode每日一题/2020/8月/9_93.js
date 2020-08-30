/**
 * 复原IP地址
 * 
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var res = []

    const restore = (s, temp) => {
        if (temp.length == 3) {
            if (
                parseInt(s).toString().length == s.length &&
                s >= 0 && 
                s <= 255 && 
                s.length > 0
            ) {
                var ip = [...temp, s].join('.')
                res.push(ip)
            }
            return
        }

        var arr = []
        if (s.length == 1) {
            arr.push(s.slice(0,1))
        } else if (s.length == 2) {
            arr.push(s.slice(0,1))
            arr.push(s.slice(0,2))
        } else {
            arr.push(s.slice(0,1))
            arr.push(s.slice(0,2))
            arr.push(s.slice(0,3))
        }

        for(var i=0;i<arr.length;i++) {
            if (
                parseInt(arr[i]).toString().length == arr[i].length &&
                arr[i] >=0 &&
                arr[i] <= 255
            ) {
                temp.push(arr[i])
                restore(s.slice(arr[i].length), temp)
                temp.pop()
            }
        }
    }

    restore(s, [])
    return res;
}