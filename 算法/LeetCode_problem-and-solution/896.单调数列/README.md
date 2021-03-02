* [官方题解](https://leetcode-cn.com/problems/monotonic-array/solution/dan-diao-shu-lie-by-leetcode-solution-ysex/)

如果数组是单调递增或单调递减的，那么它是单调的。

如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。

当给定的数组 A 是单调数组时返回 true，否则返回 false。

**示例 1：**:<br>
```
输入：[1,2,2,3]
输出：true
```

**示例 2：**:<br>

```
输入：[6,5,4,4]
输出：true
```

**示例 3：**:<br>

```
输入：[1,3,2]
输出：false
```

**提示：** <br>
* 1 <= A.length <= 50000
* -100000 <= A[i] <= 100000


来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/monotonic-array/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>