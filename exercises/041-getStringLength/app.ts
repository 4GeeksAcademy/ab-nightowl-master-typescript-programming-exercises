function getStringLength(string: string): number {
  // your code here
  return [...string].reduce((a) => a + 1, 0);
}

export {};
