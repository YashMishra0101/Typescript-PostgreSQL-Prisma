/*
>Type Guard : 

-- A type guard is a check that lets TypeScript know exactly what type a value is at a given point, so we can safely use the properties and methods available for that type..

-- Claud: A type guard is a runtime check that helps TypeScript narrow a variable's type inside a conditional, so we can safely access type-specific properties or methods. For example, if a variable could be a string or a number, I'd use something like typeof to check which one it actually is, and then TypeScript knows exactly which type I'm working with inside that block.
*/

//--Example 1

// function handleApiResponses(response: unknown): void {
//   if (typeof response === "string") {
//     console.log("Server message:", response);
//   } else if (typeof response === "number") {
//     console.log("Status code:", response);
//   } else {
//     console.log("Unknown response type");
//   }
// }

// handleApiResponses("User created successfully");

// handleApiResponses(200)

//--Example 2

// function formatId(id: string | number): string {
//   if (typeof id === "number") {
//     return `USER-${id}`; //Anything inside a template literal is converted to text, and the final result is always a string.
//   }

//   return id.toUpperCase();
// }


// console.log(typeof(formatId(101)), formatId(101));


// console.log(typeof(formatId(101)), formatId("abcd101"));