* [官方题解](https://leetcode-cn.com/problems/backspace-string-compare/solution/bi-jiao-han-tui-ge-de-zi-fu-chuan-by-leetcode-solu/)

给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

**子数组** 定义为原数组中的一个连续子序列。<br>
请你返回 arr 中 **所有奇数长度子数组的和 。**

**示例 1：**:<br>
```
输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
```

**示例 2：**:<br>

```
输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
```

**示例 3：**:<br>

```
输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
```

**示例 4：**:<br>

```
输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
```

**提示：** <br>
* 1 <= S.length <= 200
* 1 <= T.length <= 200
* S 和 T 只含有小写字母以及字符 '#'。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/backspace-string-compare
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。