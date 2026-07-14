import React, { useMemo, useState } from 'react'

const ShoppingCart = () => {

    const [theme,setTheme]=useState(true)
    
        const [search,setSearch]=useState("")
    
        const handleTheme=()=>{
            setTheme(!theme)
            console.log("theme");
            
        }

const cartItems = [
  {
    id: 1,
    productName: "iPhone 15",
    price: 79999,
    quantity: 1,
  },
  {
    id: 2,
    productName: "Wireless Mouse",
    price: 999,
    quantity: 2,
  },
  {
    id: 3,
    productName: "Bluetooth Speaker",
    price: 2499,
    quantity: 1,
  },
  {
    id: 4,
    productName: "Laptop Bag",
    price: 1499,
    quantity: 3,
  },
  {
    id: 5,
    productName: "USB-C Charger",
    price: 1299,
    quantity: 2,
  },
  {
    id: 6,
    productName: "USB-C Charger",
    price: 2,
    quantity: 2,
  }
]

const handleSearch =(e)=>{
    setSearch(e.target.value)
}




const filter=(car)=>{

    return car.reduce((total,item)=>{
        return total+item.price*item.quantity
    },0)


}




const searchFilter = useMemo(()=>{
    return filter(cartItems)
},[cartItems])

//console.log(searchFilter);


  return (
    <>

    <div className='flex gap-24 justify-center bg-amber-800 p-4 '>
        <h1 className='text-2xl text-amber-50'>Shopping Carts</h1>
        <button className='bg-amber-50 rounded-full p-1' onClick={handleTheme}>{theme?"Light":"Dark"}mode</button>
    </div>


    <div className={theme?"bg-white text-black h-screen" :"bg-black text-white h-screen"}>

        <input type='search' onChange={handleSearch} placeholder='search...' className='border'/>
        

   
   <div className='flex gap-7 justify-center m-4'>
    {cartItems.map((e,i)=>(
        <div key={i} className='bg-amber-800  text-white p-3 rounded-lg '>
            <p>Product ID:{e.id}</p>
            <p>Product Name{e.productName}</p>
            <p>Product Price:{e.price}</p>
            <p>Product Quantity:{e.quantity}</p>
            
            
           
        </div>
    ))}
    </div>
     
     {<p>Total:{searchFilter}</p>}
    </div>

    
      
    </>
  )
}

export default ShoppingCart
