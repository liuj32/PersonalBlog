/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var record = new Set(nums1)
    var res = new Set()
    for(var i=0;i<nums2.length;i++) {
        if (record.has(nums2[i])) {
            res.add(nums2[i])
        }
    }
    
    return Array.from(res)
};