/**
 * leetcode: 37
 * 
 * @param {*} root 
 */
var serialize = function(root) {
  if (root == null) {
      return "[]"
  }
  var stack = [], res = []
  var depth = maxDepth(root)
  console.log(depth)
  stack.push({level: 0, node: root})
  while(stack.length) {
      var { level, node } = stack.shift()
      if (level == depth) {
          break;
      }
      if (node == null) {
          res.push(null)
      } else {
          res.push(node.val)
          stack.push({level: level+1, node: node.left})
          stack.push({level: level+1, node: node.right})
      }    

  }

  return res
};

function maxDepth(root) {
  if (root == null) {
      return 0
  }
  var leftDepth = maxDepth(root.left)
  var rightDepth = maxDepth(root.right)

  return 1 + Math.max(leftDepth, rightDepth)
};

var deserialize = function(data) {
 
};