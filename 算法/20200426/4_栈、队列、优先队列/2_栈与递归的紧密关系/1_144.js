/**
 * 给定一个二叉树，返回它的 前序 遍历。
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
var preorderTraversal = function(root) {
  var res = [];
  help(root, res)
  return res;
};

function help(root, res) {
  if (root) {
      res.push(root.val)
      help(root.left, res);
      help(root.right, res)
  }
}

//```````````````````栈实现```````````````````//
function Command(s, node) {
  this.s = s; // go, print
  this.node = node;
}

var preorderTraversal2 = function(root) {
  var res = [];
  if (root == null) {
      return res;
  }

  var stack = [];
  stack.push(new Command('go', root));

  while(stack.length > 0) {
      var command = stack.pop();
      if (command.s == 'print') {
          res.push(command.node.val);
      } else {
          if (command.node.right) {
              stack.push(new Command('go', command.node.right))
          } 
          if (command.node.left) {
              stack.push(new Command('go', command.node.left))
          } 
          stack.push(new Command('print', command.node))
      }
  }
  
  return res;
};

