/**
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  var record = new Map();
  var len = A.length;
  var result = 0;
  
  for(var i=0;i<len;i++) {
      for (var j=0;j<len;j++) {
          var sum = C[i]+D[j];
          if (record.has(sum)) {
             var value = record.get(sum)
             record.set(sum, ++value);
          } else {
              record.set(sum, 1);
          }
          
      }
  }

  for(var i=0;i<len;i++) {
      for(var j=0;j<len;j++) {
          var sum = -(A[i] + B[j]);
          if (record.has(sum)) {
              result += record.get(sum);
          }
      }
  }

  return result;
};