

function deepClone(origin, target) {
   var target = target || {}
  
  for(let key in origin){
      if(origin.hasOwnProperty(key)){
          if(typeof origin[key] == 'object'){
              target[key] = origin[key].constructor == Array ? [] : {}
              deepClone(origin[key], target[key])
          }else{
              target[key] = origin[key]
          }
      }
  }
  return target
}

// var o = {a: [1,2,3]}
// var o1 = deepClone(o)
// o.a.push(4)
// console.log(o)
// console.log(o1)


function flat(arr, arr1) {
    arr1 =  arr1 || []
    arr.forEach((item, i) => {
        if(Array.isArray(item)){
            flat(item,arr1)
        }else{
            arr1.push(item)
        }
    })
    return arr1
  }

  let arr= [1,[2,3]]
console.log(flat(arr))







