// In non strict mode, Window is the function context
function giveThisValue() {
    return this;
}

// Even if the function is inside other function
function giveMeFunction() {
    return (() => this)();
}

// In strict mode, indefinied is the function context
function giveThisStrictValue() {
    "use strict";
    return this;
}

console.log(giveThisStrictValue());