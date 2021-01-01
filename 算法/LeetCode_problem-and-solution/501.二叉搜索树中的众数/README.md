* [官方题解](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/solution/er-cha-sou-suo-shu-zhong-de-zhong-shu-by-leetcode-/)

给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：<br>

* 结点左子树中所含结点的值小于等于当前结点的值<br>
* 结点右子树中所含结点的值大于等于当前结点的值<br>
* 左子树和右子树都是二叉搜索树<br>


例如:<br>
给定 BST [1,null,2,2],<br>

```
  1
    \
     2
    /
   2
```
返回[2].

**提示：** 如果众数超过1个，不需考虑输出顺序


来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/ <br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。<br>