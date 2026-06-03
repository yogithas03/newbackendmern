// Task 1
// Create an arrow function that accepts a student's first name and last name and returns the full name.
const students=(firstName,lastName)=>{
    let mergeName = firstName+lastName;
    return mergeName
}
console.log(students('yogitha','soundararajan'))
//rest parameters
 const students=(...names)=>{
    let mergeName =names.join("");
    return mergeName
 }
 console.log(students('yogitha','soundararajan'))

//  Task 2
// Create an arrow function that accepts a product price and quantity and returns the total amount.
const lipstick = (price,quantity) =>{
  const totalAmount = price * quantity;
  return totalAmount;
}
console.log("Total Amount", lipstick(2000,4))

// Task 3
// Create an arrow function that accepts a person's age and returns whether they are eligible for voting.

const voting = (age) =>{
    let result = age>=18?"eligible for vote":"not eligible for vote";
    return result
}
console.log(voting(18));
console.log(voting(14));

// Task 4
// Create an arrow function that accepts three numbers and returns the largest number.
 
const finding = (...number)=>{
    return Math.max(...number)
}
console.log("largest number is",finding(345,298,2803))

// Task 5
// Create an arrow function that accepts a username. If no username is provided, return "Guest" using a default parameter.

const login = (username='guest')=>username;
console.log(login())

// Task 6
// Create an arrow function that accepts two numbers and returns:
// Sum,Difference,Multiplication,Division

const calculation = (a,b)=>{
 console.log("sum:",a+b);
 console.log("difference:",a-b);
 console.log("multiplication:",a*b);
 console.log("division:",a/b);
}
calculation(20,23)

// Task 7
// Create an arrow function that accepts marks of 5 subjects and returns the total and average.

const marks = (html,css,js,react,bs) => {
    let total = html+css+js+react+bs;
    let avg = total/5;
    return {
        total,
        avg
    }
}
console.log(marks(20,30,45,55,23))

// Task 8
// Create an arrow function that accepts a salary amount and returns:
// HRA = 20%,DA = 10%,Total Salary

const salary = (amount) =>{
    let HRA = amount*20/100;
    let DA = amount*10/100;
    let totalSalary = amount+HRA+DA;
    return totalSalary;
}
console.log("salary amount is",salary(25000))

// Task 9
// Create an arrow function that accepts a temperature in Celsius and converts it to Fahrenheit.
 
const convertFahrenheit = celsius => (celsius*9/5)+32;
console.log("Fahrenheit",convertFahrenheit(67));

// Task 10
// Create an arrow function that checks whether a given number is even or odd.

const checkOddOrEven = number => number%2===0?"This is EVEN":"This is ODD"
console.log(checkOddOrEven(42));

// Task 11
// Create an arrow function that accepts a string and returns the length of the string.

const findLength = str => str.length;
console.log(findLength("Jack"))

// Task 12
// Create an arrow function that accepts a name and prints the name multiple times based on a count parameter.

const printName = (name,count) =>{
    for(let i=1;i<=count;i++){
        console.log(name);
    }
}
printName("yogitha",7)

// Task 13
// Create an arrow function that accepts multiple marks using Rest Parameters and returns the total marks.

const datas=(...mark)=>{
    let sum = 0
    for(let mar of mark){
     console.log(mar)
     sum += mar
    }
    return sum;
}
console.log(datas(67,88,56,97,45))

// Task 14
// Create an arrow function that accepts multiple numbers using Rest Parameters and returns the largest number
const multiNum = (...multi)=>{
    let finall = Math.max(...multi);
    return finall
}
console.log(multiNum(8776,546,231,5,267,98))

// Task 15
// Create an arrow function that accepts multiple numbers using Rest Parameters and returns the smallest number.
const smallNum = (...smallest)=>{
    let outputNum = Math.min(...smallest);
    return outputNum
}
console.log(smallNum(34,2,4876,34,10))

// Task 16
// Create an arrow function that accepts multiple product prices using Rest Parameters and returns the total bill amount.

const productName = (...amount) =>{
    let add = 0;
    for(let mount of amount){
        console.log(mount);
        add+=mount;
    }
    return add
}
console.log(productName(250,450,670,923,1000))