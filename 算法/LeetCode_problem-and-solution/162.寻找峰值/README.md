* [官方题解](https://leetcode-cn.com/problems/find-peak-element/solution/xun-zhao-feng-zhi-by-leetcode/)

峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

**示例 1：**:<br>
```
输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
```

**示例 2：**:<br>

```
输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5 
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
```

**说明：** <br>
你的解法应该是 O(logN) 时间复杂度的。


来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/find-peak-element/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>