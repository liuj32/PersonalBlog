/**
 * 637. 二叉树的层平均值
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var stack = []
    var arr = []
    stack.push({level: 0, node: root})
    while(stack.length) {
        var { level, node } = stack.shift()
        if (node == null) {
            continue
        }
        if (level === arr.length) {
            arr[level] = []
        }
        arr[level].push(node.val)
        stack.push({level: level+1, node: node.left})
        stack.push({level: level+1, node: node.right})
    }

    var res = []
    for(var i=0;i<arr.length;i++) {
        var temp = 0
        for(var j=0;j<arr[i].length;j++) {
            temp += arr[i][j]
        }
        res.push(temp / arr[i].length)
    }
    return res;
};