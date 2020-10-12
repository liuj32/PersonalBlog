/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */


// dfs
var subsets = function(nums) {
    var dfs = (start, temp) => {
        res.push([...temp])

        for(var i=start;i<nums.length;i++) {
            temp.push(nums[i])
            dfs(i+1, temp)
            temp.pop()
        }
    }

    var res = []
    dfs(0, [])
    return res
};


// 在原来基础上加上当前元素
var subsets = function(nums) {
    var res = [[]]
    for(var num of nums ) {
        var len = res.length
        for(var j=0;j<len;j++) {
            res.push([...res[j], num])
        }
    }
    return res
};