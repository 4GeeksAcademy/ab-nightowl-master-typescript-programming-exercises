"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLengthOfThreeWords(word1, word2, word3) {
    // your code here
    console.log([word1, word2, word3].join);
    return [word1, word2, word3].reduce((acc, w) => acc + w.length, 0);
}
