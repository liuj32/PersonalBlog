/**
 * @param {number} n
 * @return {number}
 */

 
/** 递归 */
var record = []
var integerBreak = function(n) {
    record = []
    return help(n)
};

function help(n) {
    if (n == 1) {
        return 1
    }
    if(record[n]) {
        return record[n]
    }
    var max = -1
    for(var i=1;i<n;i++) {      
        max = Math.max(max, i * (n-i), i * help(n-i))        
    }
    record[n] = max
    return max
}


/** 动态规划 */
var record = []
var integerBreak = function(n) {
    record = []
    return help(n)
};

function help(n) {
    var memory = []
    memory[1] = 1
    for(var i=2;i<=n;i++) {
        for(var j=1;j<i;j++)
            if (!memory[i]) memory[i] = 1
            memory[i] = Math.max(memory[i], j*memory[i-j], j * (i -j))
    }
    return memory[n]
}
