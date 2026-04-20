function computeAverageOfNumbers(nums: unknown[], arg2: number, arg3: unknown): number {
  // your code here
  if (nums.length === 0) return 0;
  
  const sum: number = Number(nums.reduce((acc, n) => {
    if (typeof n !== 'number') {
      throw new Error('All elements in the array must be numbers');
    }
    return Number(acc) + n;
  }, 0));
  
  return sum / nums.length;
}

export {};
