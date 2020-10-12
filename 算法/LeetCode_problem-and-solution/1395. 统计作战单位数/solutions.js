/**
 * @param {number[]} rating
 * @return {number}
 */

// O(N^3)
var numTeams = function(rating) {
    var dfs = (start, temp) => {
        if (temp.length === 3) {
            if ((temp[1] - temp[0]) * (temp[1] - temp[2]) < 0) {
                cnt++
            }
            return
        }

        for(var i=start;i<rating.length;i++) {
            temp.push(rating[i])
            dfs(i+1, temp)
            temp.pop()
        }
    }

    var cnt = 0
    dfs(0, [])
    return cnt
};


// O(N^2)
var numTeams = function(rating) {
    var len = rating.length
    var res = 0
    for(var i=0;i<len;i++) {
       var iLess = 0, iMore = 0
       var kLess = 0, kMore = 0
       for(var j=0;j<i;j++) {
           if (rating[j] < rating[i]) {
               iLess++
           } else {
               iMore++
           }
       }
       for(var k=i+1;k<len;k++) {
           if (rating[k] < rating[i]) {
               kLess++
           } else {
               kMore++
           }
       }

       res += iLess * kMore + iMore * kLess
    }

    return res
};

// 树状数组(待)
