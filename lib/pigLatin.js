'use strict';

var pigLatin = function(sentence) {

  let vowels = "aeiou";

  let words = sentence.split(" ");

  let result = [];

  for (let i = 0; i < words.length; i++) {

    let word = words[i];

    // starts with vowel
    if (vowels.includes(word[0])) {

      result.push(word + "ay");

    } else {

      let index = 0;

      // find first vowel
      while (
        !vowels.includes(word[index]) ||
        (word[index] === 'u' && word[index - 1] === 'q')
      ) {
        index++;
      }

      let newWord =
        word.slice(index) +
        word.slice(0, index) +
        "ay";

      result.push(newWord);
    }
  }

  return result.join(" ");
};

module.exports = pigLatin;