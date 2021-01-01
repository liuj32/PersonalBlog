* [官方题解](https://leetcode-cn.com/problems/odd-even-linked-list/solution/qi-ou-lian-biao-by-leetcode-solution/)

给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

**示例 1：**:<br>
```
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
```

**示例 2：**:<br>

```
输入: 2->1->3->5->6->4->7->NULL 
输出: 2->3->6->7->1->5->4->NULL
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
链接：https://leetcode-cn.com/problems/odd-even-linked-list/<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>