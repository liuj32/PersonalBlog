/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// BFS
var canFinish = function(numCourses, prerequisites) {
    var odegs = new Array(numCourses).fill(0) // 出度
    var edegs = new Array(numCourses).fill().map(() => []) // 入度
    for(var prerequisite of prerequisites) {
      odegs[prerequisite[0]]++
      edegs[prerequisite[1]].push(prerequisite[0])
    }
  
    // 找出初始待学队列
    var waitQueue = []
    for(var i=0;i<numCourses;i++) {
      if(odegs[i] === 0) {
        waitQueue.push(i)
      }
    }
    var visited = 0 // 已学课程数量
    while(waitQueue.length) {
      visited++
      var c = waitQueue.shift()
      for(var edeg of edegs[c]) {
        odegs[edeg]--
        if (odegs[edeg] === 0) {
          waitQueue.push(edeg)
        }
      }
    }
  
    return visited === numCourses
  };

  // DFS
  var canFinish = function(numCourses, prerequisites) {
    // 0-未学， 1-待学，2-已学
    var record = new Array(numCourses).fill(0) // 出度
    var edegs = new Array(numCourses).fill().map(() => []) // 入度
    for(var prerequisite of prerequisites) {
      edegs[prerequisite[0]].push(prerequisite[1])
    }
    var valid = true
    var dfs = (u) => {
      record[u] = 1
      for(var c of edegs[u]) {
        if (record[c] === 0) {
          record[c] = 1
          dfs(c)
        } else if (record[c] === 1) {
          valid = false
          return
        }
      }
      record[u] = 2
    }
  
    for(var i=0;i<numCourses && valid;i++) {
      if (!record[i]) {
        dfs(i)
      }
    }
  
    return valid
  };