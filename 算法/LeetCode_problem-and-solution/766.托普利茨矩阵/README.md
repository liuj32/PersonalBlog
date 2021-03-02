* [官方题解](https://leetcode-cn.com/problems/toeplitz-matrix/solution/tuo-pu-li-ci-ju-zhen-by-leetcode-solutio-57bb/)

给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。

如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。

**示例 1：**:<br>
```
输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
输出：true
解释：
在上述矩阵中, 其对角线为: 
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。 
各条对角线上的所有元素均相同, 因此答案是 True 。
```

**提示：** <br>
* m == matrix.length
* n == matrix[i].length
* 1 <= m, n <= 20
* 0 <= matrix[i][j] <= 99   

来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/toeplitz-matrix<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>