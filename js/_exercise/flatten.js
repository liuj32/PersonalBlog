// 方法1
function flatten(arr) {
    var result = []
    for(var i=0,l=arr.length;i<l;i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

// 方法2
function flatten(arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}

// 方法3
function flatten(arr) {
   while(arr.some((item) => Array.isArray(item))) {
       arr = [].concat(...arr)
   }
   return arr
}

// 方法4
function flatten(arr) {
  return arr.toString().split(',')
}

// 方法5
function flatten(arr) {
  return arr.flat(Infinity)
}

// 方法6
function flatten(arr) {
 var str = JSON.stringify(arr)
 str = str.replace(/\[|\]/, '')
 str = '[' + str + ']'
 return JSON.parse(str)
}

