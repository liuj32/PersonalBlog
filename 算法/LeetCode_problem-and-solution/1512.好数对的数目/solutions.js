var numIdenticalPairs = function(nums) {
    var res = 0
    var cnt = []
    for(var num of nums) {
        if (cnt[num] == null) {
            cnt[num] = 0
        }
       res += cnt[num]
       cnt[num]++
    }

    return res
};