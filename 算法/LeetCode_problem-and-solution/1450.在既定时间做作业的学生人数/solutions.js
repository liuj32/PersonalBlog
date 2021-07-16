var busyStudent = function(startTime, endTime, queryTime) {
    var res = 0
    for(var i=0;i<startTime.length;i++) {
        if (
            queryTime >= startTime[i]
            && queryTime <= endTime[i]
        ) {
            res++
        }
    }

    return res
};