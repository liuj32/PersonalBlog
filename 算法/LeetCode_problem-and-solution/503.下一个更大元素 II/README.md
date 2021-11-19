* [官方题解](https://leetcode-cn.com/problems/next-greater-element-ii/solution/xia-yi-ge-geng-da-yuan-su-ii-by-leetcode-bwam/)

给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

**示例 1：**:<br>
```
输入: [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
```

**提示：** <br>
* 1 <= arr.length <= 100
* 1 <= arr[i] <= 1000


来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/next-greater-element-ii/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>