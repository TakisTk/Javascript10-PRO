// Number Constants
console.log("Min-Max Value: " + Number.MIN_VALUE + " - " + Number.MAX_VALUE);

console.log("Min-Max Safe Int: " + Number.MIN_SAFE_INTEGER + " - " + Number.MAX_SAFE_INTEGER);

// NaN
console.log("Is a 'abc' a number? " + Number("abc"));  // NaN

// Division by zero
console.log("Positive div by zero: " + (12 / 0));    // Infinity
console.log("Negative div by zero: " + (-12 / 0));   // -Infinity

// Explicit Conversion
let num = Number("12");     // num -> 12

if (Number.isInteger(num)) {
    console.log("num is integer: " + Number.isInteger(num))
} else {
    console.log("Not an integer")
}

// Implicit Convercion --- Coercion
let aNum = 4 / "aueb";

// Υπάρχει και global isNan("Hello") true -- backward compatibility 
// Number.isNaN("Hello") false 
if (Number.isNaN(aNum)) {
    console.log("aNum is NaN?:  " + aNum)
} else {
    console.log(aNum)
}

// Format decimals
console.log((12.12345).toFixed(2));         // toFixed(2) επιστρέφει string