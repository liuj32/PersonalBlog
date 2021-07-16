/**
 * 以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var stack = [];
  var pathArr = path.split('/');
  for(var i=0;i<pathArr.length;i++) {
      if (pathArr[i] == '' || pathArr[i] == '.'){
          continue;
      }
      if (pathArr[i] == '..') {
          stack.pop();
      } else {
          stack.push(pathArr[i]);
      }
  }
  return '/' + stack.join('/')
};



// 示例 1：

// 输入："/home/"
// 输出："/home"
// 解释：注意，最后一个目录名后面没有斜杠。
// 示例 2：

// 输入："/../"
// 输出："/"
// 解释：从根目录向上一级是不可行的，因为根是你可以到达的最高级。
// 示例 3：

// 输入："/home//foo/"
// 输出："/home/foo"
// 解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。
// 示例 4：

// 输入："/a/./b/../../c/"
// 输出："/c"
// 示例 5：

// 输入："/a/../../b/../c//.//"
// 输出："/c"
// 示例 6：

// 输入："/a//b////c/d//././/.."
// 输出："/a/b/c"
