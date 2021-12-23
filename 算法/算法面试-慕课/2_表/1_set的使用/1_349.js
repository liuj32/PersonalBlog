/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var record = new Set(nums1);
  var resultRecord = new Set();
  for (let i=0;i<nums2.length;i++){
      if (record.has(nums2[i])) {
          resultRecord.add(nums2[i])
      }
  }
  return Array.from(resultRecord)
};


var arr1 = [1,2,2,1]
var arr2 = [2,2]
var result = intersection(arr1, arr2)

console.log(result)
