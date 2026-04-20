function getLengthOfThreeWords(word1: string, word2: string, word3: string): number {
  // your code here
  return [word1, word2, word3].reduce((acc, w) => acc + w.length, 0);
}

export {};
