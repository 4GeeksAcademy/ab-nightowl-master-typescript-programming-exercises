"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeAverageOfNumbers(nums, arg2, arg3) {
    // your code here
    if (nums.length === 0)
        return 0;
    const sum = Number(nums.reduce((acc, n) => {
        if (typeof n !== 'number') {
            throw new Error('All elements in the array must be numbers');
        }
        return Number(acc) + n;
    }, 0));
    return sum / nums.length;
}
