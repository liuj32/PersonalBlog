* [官方题解](https://leetcode-cn.com/problems/find-valid-matrix-given-row-and-column-sums/solution/tan-xin-zheng-ming-by-lucifer1004/)

给你两个非负整数数组 rowSum 和 colSum ，其中 rowSum[i] 是二维矩阵中第 i 行元素的和， colSum[j] 是第 j 列元素的和。换言之你不知道矩阵里的每个元素，但是你知道每一行和每一列的和。

请找到大小为 rowSum.length x colSum.length 的任意 非负整数 矩阵，且该矩阵满足 rowSum 和 colSum 的要求。

请你返回任意一个满足题目要求的二维矩阵，题目保证存在 至少一个 可行矩阵。

**示例 1：**:<br>
```
输入：rowSum = [3,8], colSum = [4,7]
输出：[[3,0],
      [1,7]]
解释：
第 0 行：3 + 0 = 0 == rowSum[0]
第 1 行：1 + 7 = 8 == rowSum[1]
第 0 列：3 + 1 = 4 == colSum[0]
第 1 列：0 + 7 = 7 == colSum[1]
行和列的和都满足题目要求，且所有矩阵元素都是非负的。
另一个可行的矩阵为：[[1,2],
                  [3,5]]
```

**示例 2：**:<br>

```
输入：rowSum = [5,7,10], colSum = [8,6,8]
输出：[[0,5,0],
      [6,1,0],
      [2,0,8]]
```

**示例 3：**:<br>

```
输入：rowSum = [14,9], colSum = [6,9,8]
输出：[[0,9,5],
      [6,0,3]]
```

**提示：** <br>
* 1 <= arr.length <= 100
* 1 <= arr[i] <= 1000


来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays/ <br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>