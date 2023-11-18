function whatsMyContext() {
    return this;
}

var getMyThis = whatsMyContext;


/**
 * getMyThis is a method of ninja1 and ninja2.
 * whatsMyContext hasn't become and method of ninja1 nor ninja2
 * whatsMyContext is a independet function invoked in different ways
 */
var ninja1 = {
    getMyThis: whatsMyContext
}

var ninja2 = {
    getMyThis: whatsMyContext
}

// Invoke as a function
console.log(getMyThis());

// Invoke as a method: this points to method's object
console.log(ninja1.getMyThis());
console.log(`THIS works as Ninja1: ${ninja1 === ninja1.getMyThis()}`)
console.log(`THIS works as Ninja2: ${ninja2 === ninja2.getMyThis()}`)