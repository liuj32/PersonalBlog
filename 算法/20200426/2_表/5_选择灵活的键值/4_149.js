/**
 * 给定一个二维平面，平面上有 n 个点，求最多有多少个点在同一条直线上。
 * @param {number[][]} points
 * @return {number}
 */

var maxPoints = function(points) {
  var len = points.length;
  if (len < 2) return len;
  
  var record = new Map();
  var res = 0;
  
  for (var i=0;i<len;i++) {
      for (var j=i+1;j<len;j++) {
          var slopeVal = slope(points[i], points[j]);
          if (record.has(slopeVal))   {
              var value = record.get(slopeVal);
              if (value.indexOf(points[j][0] + '' + points[j][1]) == -1) {
                  value.push(points[j][0] + '' + points[j][1])
              } else if (i === 0){
                  value.push(points[j][0] + '' + points[j][1])
              }
              record.set(slopeVal, value);
          } else {
              record.set(slopeVal, [points[j][0] + '' + points[j][1]]);
          }
      }
  }


  [...record.values()].forEach(e => {
      if(e.length > res) {
          res = e.length;
      }
  })


  return res + 1;
};

function slope(x1, x2) {
  if (x1[0] - x2[0] === 0)  {
      return 'max';
  }
  console.log(x1, x2)
  return ((x1[1] - x2[1]) / (x1[0] - x2[0])).toFixed(2);
}