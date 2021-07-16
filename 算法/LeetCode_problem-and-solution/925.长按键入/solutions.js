/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    var i=0, j=0
    while(j<typed.length) {
        if (i< name.length && name[i] === typed[j]) {
            i++
            j++
        } else if(j-1 >=0 && typed[j] == typed[j-1]){
            j++
        } else {
            return false
        }
    }
    return i == name.length
};