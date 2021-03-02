/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// BFS
var findOrder = function(numCourses, prerequisites) {
  var oDegs = new Array(numCourses).fill(0) // 出度
  var enEdegs = new Array(numCourses).fill().map(() => []) // 入度边
  for(var prerequisite of prerequisites) {
    oDegs[prerequisite[0]]++
    enEdegs[prerequisite[1]].push(prerequisite[0])
  }
  
  var waitQueue = []
  for(var i=0;i<numCourses;i++) {
    if (oDegs[i] === 0) {
      waitQueue.push(i)
    }
  }
  var result = []
  while(waitQueue.length) {
    var c = waitQueue.pop()
    result.push(c)
    for(var u of enEdegs[c]) {
      oDegs[u]--
      if (oDegs[u] === 0) {
        waitQueue.push(u)
      }
    }
  }
  
  return result.length === numCourses ?
    result : []
};

// DFS
var findOrder = function(numCourses, prerequisites) {
  // 0-未学， 1-待学，2-已学
  var record = new Array(numCourses).fill(0) // 出度
  var edegs = new Array(numCourses).fill().map(() => []) // 入度
  for(var prerequisite of prerequisites) {
    edegs[prerequisite[0]].push(prerequisite[1])
  }
  var valid = true
  var result = []
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
    result.push(u)
    record[u] = 2
  }

  for(var i=0;i<numCourses && valid;i++) {
    if (!record[i]) {
      dfs(i)
    }
  }

  return valid ? result : []
};