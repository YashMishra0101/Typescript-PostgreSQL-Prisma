/*
>Interface

--An Interface is a blueprint (contract) that defines what properties and methods an object or class must have.

--An interface with a class is used to enforce a contract. A class uses the implements keyword to promise that it will provide all the properties and methods defined in the interface. The interface defines what must exist, while the class defines how those members actually work. This helps create consistent, maintainable, and type-safe code in large applications.
*/

//--Example 1

// interface PaymentMethod {
//   pay(amount: number): void;
// }

// class CreditCardPayment implements PaymentMethod {
//   pay(amount: number): void {
//     console.log(`Paid ₹${amount} using Credit Card`);
//   }
// }

// class UpiPayment implements PaymentMethod {
//   pay(amount: number): void {
//     console.log(`Paid ₹${amount} using upi`);
//   }
// }

// const creditCard = new CreditCardPayment();
// creditCard.pay(50000);

// const upiPayment = new UpiPayment();
// upiPayment.pay(150000);


//--Example 2 (Normal interface with object)

// interface DeveloperInfo {
//   name: string;
//   role: string;
//   age: number;

//   getInfo(): number;
// }

// const developerInfo: DeveloperInfo = {
//   name: "Yash RK Mishra",
//   role: "FullStack Developer",
//   age: 24,

//   getInfo() {
//     return this.age;
//   },
// };


// console.log(developerInfo.getInfo());