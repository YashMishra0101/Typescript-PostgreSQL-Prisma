//>Getters (get)

//--A Getter is a special method used to safely read or return the value of a private property without allowing direct access to it.

/* 
Real Production Example

Suppose you're building an Internet Banking application.
Customers should be able to see their balance.
But they should not access the private variable directly 
*/

// class BankAccount{
//     private balance=50000;

//     get accountBalance(){
//         return this.balance;
//     }
// }

// const account=new BankAccount();

// console.log(account.accountBalance); //-- We don't call them like normal functions with parentheses, we access or assign them like they're plain properties.

//>Setter (set)

//--A Setter is a special method used to safely update the value of a private property, usually after validating the new value.

/* 
Real Production Example

Suppose a bank employee wants to update an account balance.
The balance should never become negative. 
*/

// class BankAccount {
//   private balance = 600000;

//   get accountBalance(): number {
//   return this.balance;
// }

//   set accountBalance(amount: number) {
//     if (amount < 0) {
//       throw new Error ("Balance cannot be negative.");
//       return;
//     }

//     this.balance = amount;
//   }
// }

// const account = new BankAccount();

// account.accountBalance = 100000;

// console.log(account.accountBalance); //-- We don't call them like normal functions with parentheses, we access or assign them like they're plain properties.


/* 
Imp Note :
Setter can perform any logic (replace, update, validate, etc.) because it's just a method.

However, by convention, a setter is expected to replace the property's value.

For business actions like deposit(), withdraw(), credit(), and debit(), use custom methods instead of a setter because they are clearer and more expressive. 

*/