
// ==============================
// TypeScript Basic Types (number,string,object,array,tuple,enum, union and Literal Types)
// ==============================

//>number

// function add (a:number, b:number):number{
//     return a+b;
// }

// const ans=add(4,6);
// console.log(ans);


//>string

// function fullName(firstName:string, middleName:string, lastName:string):string{
// return `${firstName} ${middleName} ${lastName}`
// }

// const userName=fullName("Yash","RK","Mishra");
// console.log(userName);


//>object 

//-- There are three ways to define an object type in TypeScript : inline type, type alias and interface

//--1)inline type

// const developerInfo:{
//     firstName:string;
//     lastName:string;
//     role:string;
// }={
//     firstName:"Yash",
//     lastName:"Mishra",
//     role:"FullStack Developer"
// }

// console.log(developerInfo.role);

//--2)type alias

// type DeveloperInfo  ={
//   firstName:string;
//   lastName:string;
//   role:string
// }

// const developerInfo:DeveloperInfo={
//     firstName:"Yash",
//     lastName:"Mishra",
//     role:"Software Developer"
// }

// console.log(developerInfo.role);


//--3)interface

// interface DeveloperInfo{
//  firstName:string;
//  lastName:string;
//  role:string;
// }

// const developerInfo:DeveloperInfo={
//     firstName:"Yash",
//     lastName:"Mishra",
//     role:"SDE 1"
// }

// console.log(developerInfo.role);


//>array

//--In TypeScript, there are three common ways to type an array: type[],Array<type> and type or interface for Reusable Array

//1)type[]

// const names:string[] =["Yash","Ram","Max"];     

// const ages:number[]=[23,24,55,35];

//2)Array<type>

// const colorsName:Array<string>=["Read","Yellow","White"];

//3)type and interface (for Reusable Array);

// type DeveloperInfo={
//     id:number,
//     name:string;
//     role:string
// }

// const developersInfo:DeveloperInfo[]=[
//   {
//     id:1,
//     name:"Yash",
//     role:"FullStack Developer"
//   },
//     {
//     id:2,
//     name:"Max",
//     role:"DevOps"
//   },
//       {
//     id:3,
//     name:"Sam",
//     role:"Security Engineer"
//   }
// ]

// console.log(developersInfo[2]);

// //=>same syntax for interface

//>Tuple

//--A tuple is a "fixed-length" array where "each position" has a predefined type. (While an array stores multiple values of the same type, there is no fixed length limit in the array)

//Example 1
// const user:[string,number]=["Yash",24];

//const user: [string, number] = [22, "Yash"]; //❌ Error, because the order is wrong.

////Example 1
// const response:[number,string]=[200,"success"];

//>enum and union

//--An enum (enumeration) is used to define a fixed set of named constant values but Today, many modern TypeScript projects don't use enums very often,instead they often use a union of string literals, union achieves a similar goal with Less Generated JavaScript.

//enum example

// enum OrderStatus{
//     Pending="PENDING",
//     Processing="PROCESSING",
//     Delivered="DELIVERED"
// }

// const orderStatus:OrderStatus=OrderStatus.Processing;

// console.log(orderStatus);

//union example

// type OrderStatus= "PENDING" | "PROCESSING" | "DELIVERED";

// const orderStatus:OrderStatus="PENDING";

// console.log(orderStatus);


// //>Literal Types improve type safety by restricting variables to specific predefined values, preventing invalid values and typos (It's like union)

//-- Whenever you write ( type Something = ... )  we are creating a Type Alias/Custom type

// type OrderStatus = "PENDING" | "PROCESSING" | "DELIVERED";

// const orderStatus:OrderStatus = "PROCESSING";

// console.log(orderStatus);
