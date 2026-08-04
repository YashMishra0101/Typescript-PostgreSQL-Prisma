console.log("Classes in typescript");

//>Classes and Access modifiers

//>class

//--A class is a blueprint (template) used to create objects with the same properties and methods.

//--A constructor is a special method that is automatically called when an object is created. It is used to initialize the object's properties.

// class Product {
//   name: string;
//   price: number;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
// }

// const macBook = new Product("MacBook", 150000);

// const hpLaptop = new Product("HP", 80000);

// console.log(macBook);
// console.log(hpLaptop);

//>Access Modifiers

//--Access Modifiers define who can access a class's properties and methods. They help control the visibility and accessibility of class members. There are four access modifiers in TypeScript: public, private, protected, and readonly.

//--🤚➡️ All four access modifiers are not present in JavaScript. Only public (default) and private (#) exist in JavaScript, protected and readonly are TypeScript features not javascript.

//--1)public (by default)

//--public allows a class's properties and methods to be accessed from anywhere. It is the default access modifier in TypeScript.

/* class Product {
  name: string;
  price: number;

//   public name: string; // Both are valid because 'public' is the default.
//   public price: number;


  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const macBook = new Product("MacBook", 150000);

console.log(macBook.name);
console.log(macBook.price); */

//>2)private

//-- private allows a class's properties and methods to be accessed only within the same class. They cannot be accessed directly from outside the class.

// Parent Class  ✅
// Child Class   ❌
// Outside Class ❌

// class BankAccount {
//   private balance: number;

//   constructor() {
//     this.balance = 0; //initial balance
//   }

//   credit(amount: number) {
//     this.balance = this.balance + amount;
//     return `₹${amount} credited successfully`;
//   }

//   debit(amount: number) {
//     if (amount > this.balance) {
//       return "Insufficient balance";
//     } else {
//       this.balance = this.balance - amount;
//       return `₹${amount} debited successfully`;
//     }
//   }

//   getBalance() {
//     return `Your balance is ₹${this.balance}`;
//   }
// }

// const account = new BankAccount();

// console.log(account.credit(30000));
// console.log(account.credit(20000));
// console.log(account.getBalance());
// console.log(account.debit(60000));
// console.log(account.debit(10000));
// console.log(account.getBalance());

// console.log(account.balance);

//>3)protected

//--protected allows a class's properties and methods to be accessed within the same class and its child (derived) classes. They cannot be accessed directly from outside the class.

// Parent Class  ✅
// Child Class   ✅
// Outside Class ❌

// private → Accessible only within the same class.
// protected → Accessible within the same class and its child classes, but not from outside.

// class Employee {
//   name: string;
//   protected salary: number;

//   constructor(name: string, salary: number) {
//     this.name = name;
//     this.salary = salary;
//   }
// }

// class Manager extends Employee {
//   showEmployeeDetails() {
//     return `${this.salary}'s salary is ₹${this.salary}`;
//   }
// }

// const manager=new Manager("Yash",130000);
// console.log(manager);

// // console.log(manager.salary);

//>4) readonly
// 
//--readonly allows a property to be assigned a value only once. After that, it cannot be modified (we cannot modify it but we can access from anywher).

class User{
  readonly userId:number;
  name:string;

  constructor(userId:number, name:string){
    this.userId=userId;
    this.name=name;
  }
}

const user=new User(1,"Yash Mishra");

console.log(user);

user.name="Yash RK Mishra"
// user.userId=2;

console.log(user);