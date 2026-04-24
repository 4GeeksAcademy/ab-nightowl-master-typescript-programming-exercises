"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    const maxLength = Math.max(word1.length, word2.length, word3.length);
    if (word1.length === maxLength) {
        return word1;
    }
    else if (word2.length === maxLength) {
        return word2;
    }
    else {
        return word3;
    }
}
