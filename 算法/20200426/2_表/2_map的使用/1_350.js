/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var record = new Map();
  for (var i=0;i<nums1.length;i++) {
      var value =  record.get(nums1[i])
      value = value == undefined ? 1 : ++value;
      record.set(nums1[i], value);
  }
  
  var result = []
   for (var i=0;i<nums2.length;i++) {
     var value = record.get(nums2[i])
     if (value > 0) {
         result.push(nums2[i]);
         record.set(nums2[i], --value);
     }    
  }

  return result;
};


var arr1 = [1,2,2,1]
var arr2 = [2,2]

var result = intersect(arr1, arr2);
console.log(result)