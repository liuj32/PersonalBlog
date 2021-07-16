/**
 * @param {number[][]} isConnected
 * @return {number}
 */

var findCircleNum = function(isConnected) {
    var visited = []
    var m = isConnected.length
    var parent = new Array(m).fill(0).map((e, index) =>  index)
    for(var i=0;i<m;i++) {
      for(var j=i+1;j<m;j++) {
        if (isConnected[i][j] === 1) {
          union(parent, i, j)
        }
      }
    }
    var res = 0
    for(var i=0;i<m;i++) {
      if(parent[i] === i) {
        res++
      }
    }
    return res
};

function union(parent, index1, index2) {
  parent[find(parent, index1)] = find(parent, index2)
}

function find(parent, index) {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index])
  }
  return parent[index]
}