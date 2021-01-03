* [官方题解](https://leetcode-cn.com/problems/find-valid-matrix-given-row-and-column-sums/solution/tan-xin-zheng-ming-by-lucifer1004/)

给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

**示例 1：**:<br>
```
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**示例 2：**:<br>

```
输入：nums = [1], k = 1
输出：[1]
```

**示例 3：**:<br>

```
输入：nums = [1,-1], k = 1
输出：[1,-1]
```

**提示：** <br>
* 1 <= nums.length <= 105
* -104 <= nums[i] <= 104
* 1 <= k <= nums.length


来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/sliding-window-maximum/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>