"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    const minLength = Math.min(word1.length, word2.length, word3.length);
    if (word1.length === minLength) {
        return word1;
    }
    else if (word2.length === minLength) {
        return word2;
    }
    else {
        return word3;
    }
}
