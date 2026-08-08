/*
>Abstraction

Definition: Abstraction is the process of hiding implementation details and exposing only the essential functionality.

In TypeScript, it is commonly achieved using abstract classes and interfaces. You can achieve abstraction using either an interface or an abstract class, depending on what you need.

In an interface. You define a contract using method signatures and properties. There is no shared implementation. With an abstract class, you define a contract with abstract methods, and you can also include shared code that child classes inherit. 

Easy line to remember: Interface means contract only. Abstract class is contract plus shared code.
*/

//--Example

// abstract class PaymentMethod {
//   abstract pay(amount: number): void; //contract using method

//   //shared implementation/shared code
//   logTransaction(amount: number): void {
//     console.log(`Transaction of ₹${amount} recorded`);
//   }
// }

// class CreditCardPayment extends PaymentMethod {
//   pay(amount: number): void {
//     console.log(`Paid ₹${amount} using Credit Card`);
//     this.logTransaction(amount);
//   }
// }

// class UPIPayment extends PaymentMethod {
//   pay(amount: number): void {
//     console.log(`Paid ₹${amount} using UPI`);
//     this.logTransaction(amount);
//   }
// }

// const creditCard=new CreditCardPayment();
// creditCard.pay(50000);

// const upi=new UPIPayment();
// upi.pay(80000);