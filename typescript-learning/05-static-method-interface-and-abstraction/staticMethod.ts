//> Static Methods

//--A static method belongs to the class itself, not to an object (instance). It can be called directly using the class name without creating an object.

/*
Why do we need static methods?

Sometimes a method doesn't need any object's data.

For example:
- Calculate tax
- Format a date
- Validate an email
- Generate a random ID
- Convert currency

These operations don't depend on a specific object, so we make them static.
*/

// class TaxCalculator {
//   static calculateGST(amount: number) {
//     return amount * 0.18;
//   }
// }

// console.log(TaxCalculator.calculateGST(50000)); // No object is created. We call the static method directly using the class name.
