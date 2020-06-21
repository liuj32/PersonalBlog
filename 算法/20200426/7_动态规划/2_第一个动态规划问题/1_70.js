/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param {number} n
 * @return {number}
 */

/**   递归  */
var res = 0
var climbStairs = function(n) {
    res = 0
    help(n)

    return res;
};

function help(n) {
    if (n == 0) {
        res++
        return
    }
    if (n < 0) {
        return
    }
    for(var i=1;i<=2;i++) {
        help(n-i)
    }
}


/** 动态规划 */

var climbStairs = function(n) {
  var memory = []
  if (n == 0 || n == 1) {
    memory[0] = memory[1] = 1
  }

  for(var i=2;i<=n;i++) {
    memory[i] = memory[i-1] + memory[i-2]
  }

  return memory[n];
};

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶