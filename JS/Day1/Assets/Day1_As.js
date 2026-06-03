
// Task 1: Variable Declaration & Reassignment

// var personName="stark";
// console.log("var before:",personName)
// personName="pepper";
// console.log("var after:",personName)

// let girlAge=25;
// console.log("let before:",girlAge)
// girlAge=27;
// console.log("let after:",girlAge)

// const companyName="Objectways";
// console.log("const before:",companyName)
// companyName="blueScope";
// console.log("const after:",companyName)

// console.log('var and let can reassigned and redeclared but const cannot reassigned and redeclared after initialization.')

// Task 2: Scope Challenge

// var globalVar = "I am Global";

// function testScope() {
 
//   var functionVar = "I am Function Scoped";

//   if (true) {
   
//     let blockVar = "I am Block Scoped";

//     console.log(globalVar);   
//     console.log(functionVar); 
//     console.log(blockVar);   
//   }

  // console.log(globalVar);  
  // console.log(functionVar); 
  // console.log(blockVar); 
// }

// testScope();

// console.log(globalVar);   
// console.log(functionVar); 
// console.log(blockVar);   

// // Task 3: Lexical Scope

// const fruit =()=>{
//       let fruitName = "Apple";
// const flesh =()=>{
//       let fleshName = "mesocarp";
// const seed=()=>{
//     let seedName = "pips";

//     console.log("friut:", fruitName);
//     console.log("flesh:",fleshName);
//     console.log("seed:", seedName);
//       };
// seed();
//     };
// flesh();
//   };
// fruit();

// Task 4: Scope Chain Search
// const company = "SLA";

// const level1 = () => {
//   const department = "Development";

//   const level2 = () => {
//     const team = "Frontend";

//     const level3 = () => {
//       console.log("Company:", company);
//       console.log("Department:", department);
//       console.log("Team:", team);
//     };

//     level3();
//   };

//   level2();
// };

// level1();

// // Task 5: Hoisting Prediction
console.log(a);
var a = 100;  //undefined



// Task 6: TDZ Investigation

// console.log(username);
// let username = "Sudhan";

// Task 7: Execution Context
// const greet = () => {
//   console.log("Hello");
// };

// greet();

// Task 8: Type Conversion Challenge

console.log("10" + 5); //string concatenation "10"+5=105

console.log("10" - 5); //string converted into number 10-5=5

console.log(true + 1); //true is consider as 1 so 1+1=2

console.log(false + 10); // 0-10 = 10

console.log(Number("100")); //it convert the string to number 100

console.log(String(500)); //it covert the number into string 500

// Task 9: Primitive vs Non-Primitive

//Primitive 
//store single value,stored directly in the stack memory
// let name = "Samitha";          // String
// let age = 25;                 // Number
// let isStudent = true;         // Boolean
// let city;                     // Undefined
// let data = null;              // Null
// let bigNum = 1234567890n; // BigInt

//Non-Primitive
// can store multiple values,can be modify
// let person = {                // Object
//   name: "gomathi",
//   age: 25
// };

// let colors = ["Red", "Blue"]; // Array

// let greet = () => {           // Function
//   console.log("Hello");
// };

// Task 10: Complete Interview Scenario


// console.log(company); // undefined //hoisting
// var company = "TechWorld";

//functionScope
// const outer = () => {  
//   let department = "Frontend";
  
//   //blockScope
//   if (true) {
//     const team = "React Team";

//     const inner = () => {
//       // console.log("Company:", company);
//       console.log("Department:", department);
//       console.log("Team:", team);

//       // Type Conversion
//       console.log("100" + 20); //string concatenation "100"+20=10020
//       console.log(Number("50") + 10); //it convert the string to number 50+10=60
//     };
//     inner(); //functioncall
//   }
   
//   // TDZ Example
//  console.log(employee); // ReferenceError let and const cannot accessed before initialzation
//   let employee = "Manisha";
//   console.log("Employee:", employee);
// };
// outer();

// Bonus Interview Task 

// var a = 10;

// const outer = () => {

//   let b = 20;

//   const inner = () => {

//     console.log(a); //10

//     console.log(b);//20

//     console.log("5" + 2);//string concatenation "5"+2=52

//   };

//   inner();

// };

// outer();


