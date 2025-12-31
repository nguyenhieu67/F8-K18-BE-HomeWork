// Task 1:
const classA = ["An", "Binh", "Chi"];
const classB = classA;
classB[0] = "An Updated";
console.log(classA);
// Because when we create the variable classA, it is an array (an object), which is a reference type.
// The array data is stored in a register, and the variable does not store the actual values but stores the register address instead.
// For example, when we create:
// const classA = ["An", "Binh", "Chi"];
// The computer stores this array in a register and returns a register address, for example 0x01.
// When we assign:
// const classB = classA;
// classB points to the same register address (0x01) as classA.
// Therefore, when we modify classB, classA is also changed because both variables reference the same register address.

// Task 2:
let x = "10";
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * "3");
console.log("hello" / y);
// Answer:
// 1: In JavaScript, when adding a string and a number using the + operator, the engine performs implicit type coercion by converting the number to a string using toString().
// After coercion, both operands are strings, so the operation becomes string concatenation.
// For other arithmetic operators (-, *, /), JavaScript automatically coerces the operands to numbers and then performs numeric calculations.
// 2: NaN stands for Not-a-Number.
// It appears when type coercion fails, meaning JavaScript cannot convert a value (such as a non-numeric string) into a valid number for a numeric operation.

// Task 3:
let age = 9;
let mathScore = 10;
let isVIP = false;

let canEnter = (age >= 10 && mathScore > 7) || isVIP;
console.log(canEnter);

// Case 1:
age = 9;
mathScore = 10;
isVIP = false;

let case1 = (age >= 10 && mathScore > 7) || isVIP;
console.log(case1); // => false

// Case 2:
age = 9;
mathScore = 10;
isVIP = true;

let case2 = (age >= 10 && mathScore > 7) || isVIP;
console.log(case2); // => true

// Logic Question:
// When we change age < 10 to NOT (!), it becomes age >= 10.
// So both expressions give the same true or false result.

// Task 4:
const laptop = {
    brand: "Dell",
    price: 1000,
    spec: { ram: "8GB", ssd: "256GB" },
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

// laptop.brand = "Apple"
// laptop.spec.ram = "16GB"

console.log(laptop.brand);
console.log(laptop.spec.ram);

// Answer:
// When myLaptop and mySpec are assigned from the laptop object, they copy the same register address.
// Therefore, when the values of myLaptop or mySpec are changed, the original laptop object is also changed because all variables point to the same register address.
