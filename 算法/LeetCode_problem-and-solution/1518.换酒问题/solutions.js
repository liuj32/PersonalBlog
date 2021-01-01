/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var res = numBottles
    var emptyBottles = numBottles
    while (emptyBottles >= numExchange) {   
      var bottles = Math.floor(emptyBottles / numExchange)
      res += bottles
      emptyBottles = bottles + emptyBottles % numExchange
    }
    return res
};