/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    var map = {}
    for(var i=0;i<groupSizes.length;i++) {
        if (map[groupSizes[i]] == null) {
            map[groupSizes[i]] = []
        }
        map[groupSizes[i]].push(i)
    }
    var res = []
    for(var num in map) {
        if (map[num].length > num) {
            while(map[num].length >= num) {
                res.push(map[num].splice(0, num))
            }
        } else {
            res.push(map[num])
        }
    }
    return res
};

// 满足一组就加入res,并清空数组
var groupThePeople = function(groupSizes) {
    var map = {}
    var res = []
    for(var i=0;i<groupSizes.length;i++) {
        if(map[groupSizes[i]] == null) {
            map[groupSizes[i]] = []
        }
        map[groupSizes[i]].push(i)
        if (map[groupSizes[i]].length === groupSizes[i]) {
            res.push(map[groupSizes[i]])
            map[groupSizes[i]] = null
        }
    }
   return res
};