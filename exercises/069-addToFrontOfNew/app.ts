function addToFrontOfNew(arr: unknown[], element: number): unknown[] {
  // your code here
  let newArr = [element, ...arr];
  return newArr;
}

export {};
