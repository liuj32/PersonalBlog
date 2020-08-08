/**
 * 二叉树展开为链表
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 申请额外空间
var flatten = function(root) {
    if (root == null) return 

    var stack = []
    const dfs = (node) => {
        if (node == null) return null

        stack.push(node)
        dfs(node.left)
        dfs(node.right)
    }

    const link = () => {
        if (stack.length == 0) return null
        var node = stack.shift()
        node.left = null
        node.right = link()
        return node
    }
    dfs(root)
    return link()
}

//原地
var flatten = function(root) {
    while(root) {
        if (root.left == null) {
            root = root.right
        } else {
            var pre = root.left
            while(pre.right) {
                pre = pre.right
            }
            pre.right = root.right
            root.right = root.left
            root.left = null
            root = root.right
        }
    }
}

//递归
var flatten = function(root) {
    var last = null
    
    var last = null
    const help = (root) => {
        if (root == null) return null
        help(root.right)
        help(root.left)
        root.left = null
        root.right = last
        last = root
    }
    help(root)
 }