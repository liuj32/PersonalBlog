/**
 * 相同的树
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p == null && q == null) return true
  if (p && q) {
      return p.val == q.val &&
              isSameTree(p.left, q.left) &&
              isSameTree(p.right, q.right)
  } else {
     return false 
  }
};