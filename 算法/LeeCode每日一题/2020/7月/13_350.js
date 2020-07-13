/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var map = {}
  var res = []
  for (var i = 0;i<nums1.length;i++) {
      if (map[nums1[i]] == null)  {
          map[nums1[i]] = 1
      } else {
          map[nums1[i]]++
      }
  }

  for(var j=0;j<nums2.length;j++) {
      if (map[nums2[j]]) {
          res.push(nums2[j])
          map[nums2[j]]--
      }
  }

  return res;
};