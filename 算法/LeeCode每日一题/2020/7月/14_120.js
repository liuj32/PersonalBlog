/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 
 * @param {number[][]} triangle
 * @return {number}
 */

/**
 * 递归超时
 */
var record = []
var minimumTotal = function(triangle) {
    record = []
    help(triangle, 0, 0, 0)
    return Math.min(...record)
};

function help(triangle, row, col, tempValue) {
    if (row == triangle.length) {
        record.push(tempValue)
        return 
    }
    for(var i=0;i<2;i++) {
        if (col+i < triangle[row].length)
            help(triangle, row+1, col+i, tempValue+triangle[row][col+i])
    }
}


/**
 * 动态规划
 */

var minimumTotal = function(triangle) {
  for(var row=triangle.length-2;row>=0;row--) {
    for(var col = 0;col<triangle[row].length;col++) {
        triangle[row][col] = triangle[row][col] + Math.min(triangle[row+1][col], triangle[row+1][col+1])
    }
  }

  return triangle[0][0]
};
