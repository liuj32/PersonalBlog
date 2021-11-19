* [官方题解](https://leetcode-cn.com/problems/range-sum-query-2d-immutable/solution/er-wei-qu-yu-he-jian-suo-ju-zhen-bu-ke-b-2z5n/)

给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。

**示例 1：**:<br>
```
给定 matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
```

**提示：** <br>
* 你可以假设矩阵不可变。
* 会多次调用 sumRegion 方法。
* 你可以假设 row1 ≤ row2 且 col1 ≤ col2 。


来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/range-sum-query-2d-immutable/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>