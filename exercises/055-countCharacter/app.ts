function countCharacter(str: string, char: string): number {
  // your code here
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
        count++;
    }
  }
  return count;
}

export {};
