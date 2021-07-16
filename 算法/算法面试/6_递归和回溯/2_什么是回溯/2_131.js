/**
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
 * @param {string} s
 * @return {string[][]}
 */
var res = []
var partition = function(s) {
    res = []
    if (s.length == 0) {
        return null;
    }

    help(s, 0, [])
    return res;
};

function help(s, cur, temp) {
    if(cur == s.length) {
        res.push(temp)
        return
    }

    var arr = []
    for(var i=1;i<=s.length - cur;i++) {
        var str = s.substr(cur, i)
        if(isReverseSame(str)) {
            arr.push(str)
        }
    }
    for(var j=0;j<arr.length;j++) {
        help(s, cur + arr[j].length, temp.concat(arr[j]))
    }
}

function isReverseSame(s) {
   var i = 0, j = s.length - 1;
   while(i<j) {
       if(s[i] == s[j]) {
           i++;
           j--;
       } else {
           return false;
       }
   }
   
   return true;
}