// ==============================
// TypeScript Special Types (any, unknown, never and void)
// ==============================

//>any
//-- any disables TypeScript type checking. A variable can hold any type of value.

// let userName :any="Yash";
// userName=80;
// userName=false;

// console.log(userName);

//>unknown
//-- unknown means "I don't know the type yet" but unlike any, you must check the type before using it.
//-- The main difference between any and unknown is that unknown requires type checking before you can use the value, whereas any disables type checking completely.

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// function fetchUser(): unknown {
//   return {
//     id: 1,
//     name: "Yash",
//     email: "yash@gmail.com",
//   };
// }

// const response: unknown = fetchUser();

// if (typeof response === "object" && response !== null && "name" in response && "email" in response) {
//   const user = response as User;

//   console.log(user.name);
//   console.log(user.email);
// }

//>never

//--never means: This function will never successfully finish and return a value.

// function errorMessage(message: string, code: number): never {
//   throw new Error(`${message} : ${code}`);
// }

// const output = errorMessage("Internal server error", 500);
// console.log(output);


//>void
//--Void means the function completes successfully but does not return any value, means void is used for functions that perform an action and complete successfully without returning a value.

// Call Function
//       │
//       ▼
// Send Email
//       │
//       ▼
// Function Ends Successfully ✅
//       │
//       ▼
// Returns Nothing (void)

// function sendEmail(email:string):void{
//     console.log(`Email successfully sent to ${email}`);
// }

// sendEmail("yashrkmishra@gmail.com")//No return value is needed because the function only performs an action.
