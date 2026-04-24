function findShortestOfThreeWords(word1: string, word2: string, word3: string): string {
  // your code here
  const minLength = Math.min(word1.length, word2.length, word3.length);
  if (word1.length === minLength) {
    return word1;
  } else if (word2.length === minLength) {
    return word2;
  } else {
    return word3;
  }
}

export {};
