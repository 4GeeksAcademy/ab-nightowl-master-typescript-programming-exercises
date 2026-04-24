function extend(obj1: any, obj2: any): any {
  // your code here
  for (const key in obj2) {
    if (obj1[key]) continue;
    obj1[key] = obj2[key]
  }
  return obj1;
}

export {};
