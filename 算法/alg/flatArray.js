
    let arr1= [3,1,[2],[[22]]]

    function flat(arr, array){
      for(let i=0;i<arr.length;i++){
         if(Array.isArray(arr[i])){
           flat(arr[i],array)
         }else{
           array.push(arr[i])
         }
      }
      
    }
    let arr  = []
    flat(arr1,arr)
    console.log(arr1)
    console.log(arr)
