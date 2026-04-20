"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStringLength(string) {
    // your code here
    return [...string].reduce((a) => a + 1, 0);
}
