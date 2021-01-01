/**
 * @param {number[][]} people
 * @return {number[][]}
 */

// 升序 => 将第i个人放入队列中的第 ki+1个空位置
var reconstructQueue = function(people) {
    people.sort((person1, person2) => {
      if (person1[0] != person2[0]) {
        return person1[0] - person2[0]
      } else {
        return person2[1] - person1[1]
      }
    })
    var ans = []
    for(var person of people) {
      var space = person[1] + 1
      for(var i=0;i<people.length;i++) {
        if (ans[i] == null) {
          space--
          if (space == 0) {
            ans[i] = person
            break
          }
        }
      }
    }
  
    return ans
  };

// 降序 => 插入
var reconstructQueue = function(people) {
    people.sort((person1, person2) => {
      if (person1[0] != person2[0]) {
        return person2[0] - person1[0]
      } else {
        return person1[1] - person2[1]
      }
    })
    console.log(people)
    var ans = []
    for(var person of people) {
      ans.splice(person[1], 0, person)
    }
  
    return ans
  };