//>Inheritance

//--Inheritance allows a child class to inherit the properties and methods of a parent class using the extends keyword. It promotes code reusability and reduces duplicate code.

//--Super

//--super() is used inside a child class constructor to call the parent class constructor. It initializes the inherited properties before the child class initializes its own properties.

//--In simple language: When a child class has a constructor, you call super(...) first to run the parent constructor and pass it the required values. That initializes the parent part before you use this in the child. So, in one line, super calls the parent constructor to set up inherited stuff before the child uses it

//Parent class

// class Employee {
//   readonly id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   employeeInfo() {
//     return `Employee name is ${this.name} and id number is ${this.id}`;
//   }
// }

// //child class
// class EmployeeRole extends Employee {
//   role: string;

//   constructor(id: number, name: string, role: string) {
//     super(id, name);
//     this.role = role;
//   }

//   employeeRoleInfo() {
//     return `Employee role is ${this.role}`;
//   }
// }

// //child class
// class EmployeeManager extends Employee {
//   managerName: string;
//   constructor(managerName: string, name: string, id: number) {
//     super(id, name);
//     this.managerName = managerName;
//   }

//   employeeManagerInfo() {
//     return `${this.managerName} is the manager of ${this.name}.`;
//   }
// }

// const employee = new Employee(1, "Yash Mishra");
// console.log(employee.employeeInfo());

// const employeeRole = new EmployeeRole(1, "Yash Mishra", "Full Stack Developer");
// console.log(employeeRole.employeeRoleInfo());

// const manager = new EmployeeManager("Piya Singh", "Yash Mishra", 1);
// console.log(manager.employeeManagerInfo());
