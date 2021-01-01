// 暴力 + 前缀和 O(n^2)

var sumOddLengthSubarrays = function(arr) {

    var presum = [0]
    for(var value of arr) {
        presum.push(presum[presum.length - 1] + value)
    }
    var res = 0
   for (var i=0;i<arr.length;i++) {
       for(var sz = 1;sz+i-1<arr.length;sz+=2) {
           res += presum[i+sz] - presum[i]
       }
   }
    return res
};

// O(n)
var sumOddLengthSubarrays = function(arr) {
    var res = 0
    for (var i=0;i<arr.length;i++) {
       var left = i+1, right = arr.length - i
       var left_even = Math.floor((left + 1) / 2), right_even = Math.floor((right + 1) / 2),
       left_odd = Math.floor(left / 2), right_odd = Math.floor(right / 2)
       res += arr[i] * (left_even * right_even + left_odd * right_odd)
    }

    return res
};




// 回溯
var sumOddLengthSubarrays = function(arr) {

    var dfs = (start, path, pathSum) => {
        if (path.length % 2 == 1) {
            res += pathSum
        }
        for(var i=start;i<arr.length;i++) {
            if (start > 0 && i - start > 0) {
                return
            }
            pathSum += arr[i]
            path.push(arr[i])
            dfs(i+1, path, pathSum)
            pathSum -= arr[i]
            path.pop()
        }
    }

    var res = 0
    dfs(0, [], 0)
    return res
};