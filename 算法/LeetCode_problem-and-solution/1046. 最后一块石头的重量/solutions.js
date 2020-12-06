/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => b -a)
    while(stones.length > 1) {
      var stone1 = stones.shift(), stone2 = stones.shift()
      if (stone1 !== stone2) {
        stones.push(stone1 - stone2)
        stones.sort((a, b) => b -a)
      }
    }
  
    return stones[0] || 0
  };