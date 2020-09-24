/**
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

  每次转换只能改变一个字母。
  转换过程中的中间单词必须是字典中的单词。
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if(wordList.length === 0 || wordList.indexOf(endWord) === -1) {
      return 0;
  }
  
  var beginWordLen = beginWord.length;
  var endWordLen = endWord.length;
  var alphabet = [];
  for (var i=97;i<123;i++) {
      alphabet.push(String.fromCharCode(i))
  }
  var alphabetLen = alphabet.length;
  var obj = {}
  for (var i= 0;i<wordList.length;i++) {
      obj[wordList[i]] = true;
  }

  console.log(alphabet)

  var stack = [];
  var isVisited = {}
  stack.push({str: beginWord, step: 1});
  isVisited[beginWord] = true;
  while(stack.length > 0) {
      var {str, step} = stack.shift();
      if (str === endWord) {
          return step;
      }

      for (var i=0;i<beginWordLen;i++) {
          for(var j=0;j<alphabetLen;j++) {
              var temp  = str.split('');
              temp[i] = alphabet[j];
              temp = temp.join('');
              if (isVisited[temp]== null) {
                  if (obj[temp]) {
                      stack.push({str: temp, step: step + 1})
                  }
                  isVisited[temp] = true;
              }

          }

          
      }
  }

  return 0;
};




// 示例 1:

// 输入:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// 输出: 5

// 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
//      返回它的长度 5。
// 示例 2:

// 输入:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// 输出: 0

// 解释: endWord "cog" 不在字典中，所以无法进行转换。
