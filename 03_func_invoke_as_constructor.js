function Ninja() {
    this.skulk = function () { return this; }
}

/**
 * Invoking as a constructor
 */
var ninja1 = new Ninja();

console.log(ninja1.skulk() === ninja1)