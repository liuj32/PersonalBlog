/**
 * @param {number[]} answers
 * @return {number}
 */
 var numRabbits = function(answers) {
    var m = answers.length
    if(m === 0) {
        return 0
    }
    var record = new Map()
    var res = 0
    for(var i=0;i<m;i++) {
        if (!record.get(answers[i])) {
            res += 1 + answers[i]
            record.set(answers[i], answers[i])
        } else {
            var value = record.get(answers[i])
            value--
            record.set(answers[i], value)
        }
    }
    return res
};