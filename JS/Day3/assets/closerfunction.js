// //  Task 1 -Bank Account Using Closure
// const bankDetails =()=>{
//      let initialAmount = 5000;
//      return {
//         deposit : (amount)=>{
//            initialAmount+=amount;
//             return initialAmount;
//         },
//         withdraw : (amount)=>{
//             if(amount>initialAmount){
//                 console.log("INSUFFICENT AMOUNT")
//             }
//             initialAmount-=amount;
//             return initialAmount;
//         },
//         balance : (amount)=>{
//             return initialAmount;
//         }
//      }
// }
// const account = bankDetails();
// console.log(account.balance());
// console.log(account.deposit(50000));
// console.log(account.withdraw(20000));
// console.log(account.balance());


// // Task 2 - Student Attendance Counter

// const attendanceCounter = () =>{
//     let count = 0;
//     return ()=>{
//         count++;
//         console.log(`Current Attendance:${count}`)
//     }
// }
// const attendance = attendanceCounter();
// attendance();
// attendance();
// attendance();

// // Task 3 - Website Visitor Counter

// const visitorCount = () => {
//     let visitors = 0;
//     return visit=(()=>{
//         visitors++;
//         console.log("total visitor",visitors)
//     })
// }
// const visiterList = visitorCount();
// visiterList();
// visiterList();
// visiterList();
// visiterList();
// visiterList();

// // Task 4 - Shopping Cart Counter

// const cart =()=>{
//     let product = 0;
//    return{
//     addProduct : (item)=>{
//         product+=item;
//         console.log("Product Added:",item);
//         return product;
//     },
//     removeProduct :(item)=>{
//         if(item>product){
//           console.log("no products");
//           return product;
//         }
//         product-=item;
//         console.log("Product Removed:",item);
//         return product;
//     },
//     total :(item)=>{
//         console.log("Total Product :",product)
//         return product;
//     }
//    }
// }
// const totalItem = cart();
// console.log(totalItem.total());
// console.log(totalItem.addProduct(4));
// console.log(totalItem.removeProduct(10));
// console.log(totalItem.total());

// // Task 5 - ATM Machine System

// const atmMachine = ()=>{
//      let bankCash= 50000;

//      return{
//         withdraw : (cash) =>{
//             if(cash>bankCash){
//                 console.log("A Machine doesn't have unlimited CASH!!!")
//                 return bankCash;
//             }
//             bankCash-=cash;
//             console.log("withdraw cash is :",cash)
//             return bankCash;
//         },
//         checkBalance : (cash)=>{
//             console.log("atm balance",bankCash)
//             return bankCash;
//         }
//      }
// }
// const atm = atmMachine();
// console.log(atm.withdraw(60000));
// console.log(atm.checkBalance());

// // Task 6 - Login Attempt Tracker

// const attempt = () =>{
//     let count = 0;
//     return login = (()=>{
//         count++;
//         console.log("login  attempt number is :",count);
//         return count;
//     })
// }
// let process = attempt();
// process();
// process();
// process();
// process();
// process();


// // Task 7 - Callback Injection - Payment Gateway

const processPayment=(callback)=>{
    callback();
}
const gpay = () =>{
    console.log("payment received through GPAY")
}
const phonePay = ()=>{
    console.log("payment received through PhonePAY")
}
const paytm = ()=>{
    console.log("payment received through PAYTM")
}
const payment = processPayment;
processPayment(gpay);
processPayment(phonePay);
processPayment(paytm);

// // Task 8 - Callback Injection - User Actions

const executeAction=(callback)=>{
    callback();
}
const login =()=>{
    console.log("you sucessfully login")
}
const logout =()=>{
    console.log("ohh you LOGOUT!!!")
}
const register =()=>{
    console.log("hey you'r registeration completed!!!")
}
executeAction(login);
executeAction(logout);
executeAction(register);

// Task 9 - setTimeout Notification System

console.log("Sending Notification...")
setTimeout(()=>{
    console.log("Notification Sent")
},3000)

// Task 10 - Closure + Callback + setTimeout (Combined)
const orderProcess = () =>{
    
}





