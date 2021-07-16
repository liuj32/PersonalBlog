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

