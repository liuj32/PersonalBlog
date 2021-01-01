/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false
    }
     var map = new Map()
     for(var i=0;i<s.length;i++) {
       if(map.has(s[i])) {
         var count = map.get(s[i])
         map.set(s[i], ++count)
       } else {
         map.set(s[i], 1)
       }
     }
  
     for(var i=0;i<t.length;i++) {
       if (map.has(t[i])) {
         var count = map.get(t[i])
         count--
         if (count === 0) {
           map.delete(t[i])
         } else {
           map.set(t[i], count)
         }
       } else {
         return false
       }
     }
     return true
  };