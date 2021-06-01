/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    var tail = m + n - 1
    var p1 = m -1, p2 = n -1
    var cur
    while(p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--]
        } else if (p2 === -1) {
            cur = nums1[p1--]
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums2[p2--]
        } else {
            cur = nums1[p1--]
        }
        nums1[tail--] = cur
    }
};