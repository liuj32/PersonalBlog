/**
 * 打家劫舍 III
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// dfs + 暴力递归
var rob = function(root) {
  if (root == null) {
      return 0
  }

  var sum = root.val
  if (root.left) {
      sum += rob(root.left.left)
      sum += rob(root.left.right)
  }
  if (root.right) {
      sum += rob(root.right.left)
      sum += rob(root.right.right)
  }

  return Math.max(sum, rob(root.left) + rob(root.right))
};


// dfs + 记忆化搜索
var rob = function(root) {
    if (root )
    var memo = new Map()

    const help = (root, memo) => {
        if (root == null) {
            return 0
        }
        if (memo.has(root)) {
            return memo.get(root)
        }

        var sum = root.val
        if (root.left) {
            sum += help(root.left.left, memo)
            sum += help(root.left.right, memo)
        }
        if (root.right) {
            sum += help(root.right.left, memo)
            sum += help(root.right.right, memo)
        }
        memo.set(root, Math.max(sum, help(root.left, memo) + help(root.right, memo)))
        return memo.get(root)
    }

    return help(root, memo)
};


// 动态规划，定义两种状态：偷或者不偷
var rob = function(root) {

    const help = (root) => {
        if(root == null) {
            return [0, 0]
        }
        var result = [0, 0]
        var left = help(root.left)
        var right = help(root.right)

        result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
        result[1] = root.val + left[0] + right[0]

        return result
    }

    var result = help(root)
    return Math.max(result[0], result[1])
};