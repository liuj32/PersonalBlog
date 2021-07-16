Array.prototype.selfMap = function(callback) {
  const array = this
  const result = []
  for(var i=0;i<array.length;i++) {
    if (!arr.hasOwnProperty(i)) continue
    result[i] = callback(array[i], i, array)
  }
  return result
}

// 使用reduce实现数组的map方法
Array.prototype.selfMap = function(callback) {
  const arr = this
  return arr.reduce((pre, cur, index) => {
    return [...pre, callback(cur, index, arr)]
  }, [])
}