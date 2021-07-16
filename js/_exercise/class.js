
function inherit(subType, superType) {
  subType.prototype = Object.create(superType.prototype)
}

function A() {
  this.name = 'a'
}
A.prototype.eat = function {
  return 'eat'
}
A.age = '20'

function B() {
}

inherit(A, B)
var b = new B()
console.log(b)