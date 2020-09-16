/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0, j= 0;
  let nums3 = []
  while (i < m && j < n) {
      if (nums1[i] < nums2[j]) {
          nums3.push(nums1[i])
          i++;
      } else {
          nums3.push(nums2[j])
          j++;
      }
  }
  while (i < m) {
      nums3.push(nums1[i])
      i++;
  }

  while (j < n) {
      nums3.push(nums2[j])
      j++;
  }   
  i = 0;
  while(i<nums1.length){
    nums1[i] = nums3[i]
    i++;
  }
};

var arr1 = [0]
var arr2 = [2]
var result = merge(arr1,3, arr2,3)

console.log(arr1)

