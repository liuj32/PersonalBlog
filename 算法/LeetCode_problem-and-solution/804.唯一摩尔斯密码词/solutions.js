/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var uniqueMorse = new Set()
    var morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    for(var word  of words) {
        var morse = ''
        for(var c of word) {
           morse += morseArr[c.charCodeAt() - 97]
        }
        uniqueMorse.add(morse)
    }

    return uniqueMorse.size
};