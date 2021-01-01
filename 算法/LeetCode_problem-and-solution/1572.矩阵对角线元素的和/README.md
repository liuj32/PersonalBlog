* [官方题解](https://leetcode-cn.com/problems/matrix-diagonal-sum/solution/dai-ma-jian-bian-ji-bai-100-by-zjw1221/)

给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。

请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。


**示例 1：**:<br>
```
输入：mat = [[1,2,3],
            [4,5,6],
            [7,8,9]]
输出：25
解释：对角线的和为：1 + 5 + 9 + 3 + 7 = 25
请注意，元素 mat[1][1] = 5 只会被计算一次。
```

**示例 2：**:<br>

```
输入：mat = [[1,1,1,1],
            [1,1,1,1],
            [1,1,1,1],
            [1,1,1,1]]
输出：8
```

**示例 3：**:<br>

```
输入：mat = [[5]]
输出：5
```

**提示：** <br>
* n == mat.length == mat[i].length
* 1 <= n <= 100
* 1 <= mat[i][j] <= 100


来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/matrix-diagonal-sum/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>