/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * @param {string} s
 * @return {string[]}
 */
var res = []
var restoreIpAddresses = function(s) {
    res = []
    if (s.length <4) {
        return [];
    }

    help(s,0, [])
    return res;
    
};

function help(s,cur, temp) {
    if (temp.length == 4) {
       res.push(temp.join('.'))
       return;
    }

    var arr = []
    var interval = s.length - cur;

    if (interval <= 0){
      return
    } else if (temp.length == 3) {
        arr.push(s.slice(cur))
    } else if(interval == 1) {
      arr.push(s.substr(cur, 1))
    } else if (interval == 2) {
      arr.push(s.substr(cur, 1))
      arr.push(s.substr(cur, 2))
    } else {
      arr.push(s.substr(cur, 1))
      arr.push(s.substr(cur, 2))
      arr.push(s.substr(cur, 3))
    }

    for (var i=0;i<arr.length;i++) {
        if (parseInt(arr[i]).toString() != arr[i]) {
            continue 
        }
        if (parseInt(arr[i]) > 255) {
            return
        }        
        help(s, cur + arr[i].length, temp.concat(arr[i]))
    }
}

 

// 示例:

// 输入: "25525511135"
// 输出: ["255.255.11.135", "255.255.111.35"]