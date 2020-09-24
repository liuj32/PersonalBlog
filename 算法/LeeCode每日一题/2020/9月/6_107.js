/**
 * 107. 二叉树的层次遍历 II
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root == null) {
        return []
    }
    var res = []
    var stack = []
    stack.push({node: root, level: 0})
    while(stack.length) {
        var { level, node } = stack.shift()
        if (node == null) {
            continue
        }
        if (res.length == level) {
            res.unshift([])
        }
        res[0].push(node.val)
        stack.push({node: node.left, level: level+1})
        stack.push({node: node.right, level: level+1})
    }

    return res
};