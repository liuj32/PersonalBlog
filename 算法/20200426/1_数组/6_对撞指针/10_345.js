/**
 * 以字符串作为输入，反转该字符串中的元音字母。
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var len = s.length;
    var  strArr = s.split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var left = 0, right = len -1;
    while(left < right) {
        if (vowels.indexOf(strArr[left].toLowerCase()) === -1) {
            left++;
            continue;
        }
        if (vowels.indexOf(strArr[right].toLowerCase()) === -1) {
            right--;
            continue;
        }        

        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
    return strArr.join('')
};


var str = "hello"
var result = reverseVowels(str)

console.log(result)

