/*
>Generics
Generics allow us to write reusable code that works with different types while still maintaining type safety.

Generics are how you write code that works with multiple types without losing type safety
*/

//--Example 1

function getValue<T>(value: T): T {
  return value;
}

const Username = getValue<string>("Yash");
console.log(Username);

const age = getValue<number>(24);
console.log(age);

//--Example 2

// Without generics — we need one function per type

function firsString(arr: string[]): string {
  return arr[0];
}

function firstNumber(arr: number[]): number {
  return arr[0];
}

//With Generic

function first<T>(arr: T[]): T {
  return arr[0];
}

const num = first([11, 22, 33, 44]);
console.log(num);

const str = first(["aa", "bb", "cc", "dd"]);
console.log(str.toUpperCase());

//--Example 3

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

const userResponse: ApiResponse<User> = {
  success: true,
  message: "User fetched successfully",
  data: {
    id: 1,
    name: "Yash",
    email: "yashrkm@gmail.com",
  },
};

const productResponse: ApiResponse<Product> = {
  success: true,
  message: "Product fetched successfully",
  data: {
    id: 1,
    name: "MacBook",
    price: 250000,
  },
};

console.log(userResponse);
console.log(productResponse);
