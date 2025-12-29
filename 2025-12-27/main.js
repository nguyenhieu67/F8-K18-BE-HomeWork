// Part 1: Variable declaration & console.log (basic)
// 1. Initialize 3 variables:
const name = "Nguyen Duc Hieu";
const age = 25;
const isStudent = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Is student: ${isStudent}`);

// 2. Initialize and change values
let a = 5;
let b = 10;
a = 8;
b = 13;

console.log(a, b);

// 🟢 Part 2: const / let / var
// Difference between const and let:
//     - let can be reassigned.
//     - const is a constant and cannot be reassigned.
//       If you try to reassign it, an error will occur.
//When should const be used?
//Use const when you want the variable’s value not to be changed and to remain unique, for example when defining an id or a name.

// Is the following code correct or incorrect? Explain:
// const x = 10
// x = 20
// - The code above is incorrect because const is a constant
//   and cannot be reassigned.

// 🟡 Part 3: Data types
// "100"        String
// 100          Number
// true         Boolean
// [1, 2, 3]    Array -> typeof -> Object
// { name: "An", age: 20 }   Object
// null         Object
// undefined    Undefined

const student = {
    name: "Nguyen Duc Hieu",
    age: 25,
    scores: [1, 2, 3],
};

console.log(student);

// 🟡 Part 4: Type casting
let str = "1000";
console.log(Number(str), typeof str);
let number = 1000;
console.log(String(number), typeof number);
let bool = true;
console.log(String(bool), typeof bool);

// 🔵 Part 5: Truthy / Falsy (logical thinking)
// Boolean(0)           false
// Boolean(1)           true
// Boolean("")          false
// Boolean("hello")     true
// Boolean(null)        false
// Boolean([])          true

// 🔵 Part 6: Array & memory (related to RAM diagram)
const numbers = [4, 3, 1, 5, 1];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// Why does assigning: const a = numbers refer to the same memory?
// -> In JavaScript, arrays are reference types,
//    so a and numbers point to the same memory location.
//    Variables do not store the array data directly,
//    they store the memory address that points to the array in RAM.
