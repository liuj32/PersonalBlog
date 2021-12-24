// 字符串消消乐

var str = 'aaaaaffssfds'

function solve(str) {
  var stack = []
  for(var i=0;i<str.length;i++) {
    if (stack.length && stack[stack.length-1] != str[i]) {
      var count = 0
      var prevChar = stack[stack.length -1]
      if (stack[stack.length -1] === stack[stack.length - 2]) {
        while(stack[stack.length-1] === prevChar) {
          count++
          stack.pop()
        }
      }
      if (count >= 3) {
        i++
      }
    }
    stack.push(str[i])
  }

  return stack.join('')
}

var res= solve(str)
console.log(res)