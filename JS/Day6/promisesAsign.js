
// Task 1 - Student Data Loading Callback Version 

const getStudent = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Sudhan")
    },2000)
})
getStudent.then((data)=>{
    console.log(data)
})

// Task 2 - Employee Details Callback Version

const getEmployee = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({id:1,name:"sudhann",role:"Trainer"})
    },3000)
})
getEmployee.then((data)=>{console.log(data)})


// Task 3 - Login System Callback Version

const login = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("Login Success")
       },2000)
})
login.then((data)=>{console.log(data)})


// Task 4 - Product Loading Callback Version

const getProduct = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(["laptop","Mobile","keyBoard"])
    },4000)
})
getProduct.then((data)=>{console.log(data)})

// Task 5 - Food Delivery System Callback Version

const getDelivery = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Pizza Delivered")
    },5000)
})
getDelivery.then((data)=>{console.log(data)})

// Task 6 - Callback Hell to Promise Chain Existing Callback Hell
// getUser(()=>{
//     getOrders(()=>{
//         getPayment(()=>{
//             console.log("Completed")
//         })
//     })
// })

const getUser = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("User Loged!!")
    },2000)
})
const getOrders = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Order is Loading...")
    },3000)
})
const getPayment = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Payment Completed***")
    },4000)
})
getUser.then((user)=>{
    console.log(user);
   return getOrders;
})
getOrders.then((order)=>{
    console.log(order);
    return getPayment;
})
getPayment.then((payment)=>{
    console.log(payment)
})

// // Bonus Task 7 - Success & Failure Handling Callback Version

const payment = new Promise((resolve,reject)=>{
    const status = false;
    if(status){
      resolve("Payment Success")
    }else{
        reject("Payment Failed")
    }
})
payment.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

