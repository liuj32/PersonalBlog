/**
 * 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  var len = points.length;
  var res = 0;

  for (var i=0;i<len;i++) {

     var record = new Map();
     for (var j=0;j<len;j++) {
         if (i !== j) {
             var distance = dis(points[i], points[j])
             if (record.has(distance)) {
                 var value = record.get(distance);
                 record.set(distance, ++value);
             }else {
                  record.set(distance, 1);
             }
         }
     }

     for (var val of record.values()) {
         res += val * (val - 1);
     }
  }

  return res;
};

function dis(a, b) {
   return (a[0] - b[0]) * (a[0] - b[0]) + 
       (a[1] - b[1]) * (a[1] - b[1]);
}