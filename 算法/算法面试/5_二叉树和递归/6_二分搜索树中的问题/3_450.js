/**
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root == null) {
      return null;
  }

  if (root.val == key) {
      if (root.left == null) {
          return root.right
      } else if (root.right == null) {
          return root.left;
      }

      var node = root.left;
      while(node.right != null) {
          node = node.right;
      }
      node.right = root.right;
      return root.left;

  } else if (key < root.val) {
     root.left = deleteNode(root.left, key)
  } else {
     root.right = deleteNode(root.right, key)
  }

  return root;
};


示例:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。

一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。

    5
   / \
  4   6
 /     \
2       7

另一个正确答案是 [5,2,6,null,4,null,7]。

    5
   / \
  2   6
   \   \
    4   7