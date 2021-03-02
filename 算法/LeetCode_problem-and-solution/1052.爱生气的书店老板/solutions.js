/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    var m = customers.length
    var maxSatisfiedCustomer = 0
    var curSatisfiedCustomer = 0
    var i = 0;
    while(i < m) {
        if (
            i < X && grumpy[i] === 1
            || grumpy[i] === 0
        ) {
            curSatisfiedCustomer += customers[i]
        }
        i++
    }
    var maxSatisfiedCustomer = curSatisfiedCustomer
    i = X
    while(i < m) {
        curSatisfiedCustomer += grumpy[i - X] === 1 ? -customers[i - X] : 0
        curSatisfiedCustomer += grumpy[i] === 1 ? customers[i] : 0
        maxSatisfiedCustomer = Math.max(maxSatisfiedCustomer, curSatisfiedCustomer)
        i++
    }
    return maxSatisfiedCustomer
};