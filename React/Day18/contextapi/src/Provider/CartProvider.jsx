import { useState } from "react"
import CartContext from "../Context/CartContext"


const CartProvider = ({children}) => {

    const [carts,setCarts]=useState([])
 const handleClick = ()=>{
    setCarts([{
   id:1,
   product:"Laptop",
   qty:2
 },
 {
   id:2,
   product:"Mouse",
   qty:1
 }])
 }
    
 const totalqty = carts.reduce((total,item)=>total+item.qty,0)
  return (
    <>
    <CartContext.Provider value={{carts,handleClick,totalqty}}>
        {children}
    </CartContext.Provider>
      
    </>
  )
}

export default CartProvider
