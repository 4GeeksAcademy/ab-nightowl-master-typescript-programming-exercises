"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addToFrontOfNew(arr, element) {
    // your code here
    let newArr = [element, ...arr];
    return newArr;
}
