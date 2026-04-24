function areValidCredentials(name: string, pass: string): boolean {
  // your code here
  if (name.length > 3 && pass.length >= 8) {
    return true;
  } else {
    return false;
  }
}

export {};
