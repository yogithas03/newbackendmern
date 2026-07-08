import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "../Context/CartContext";

const Cart = () => {

    const {carts,handleClick,totalqty}=useContext(CartContext)
  return (
    <>

    <nav className="flex justify-between bg-[#192330] p-3 text-white">
        <h1>MY SHOP</h1>
        <ul className="flex gap-10">
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
       <button  onClick={handleClick}
       className= "flex gap-1 focus:ring-2 focus:ring-green-500 rounded-lg p-2">Carts<FaCartShopping className="text-2xl"/>({totalqty})</button>
      </nav>
      <div className="text-center">
        <h1 className="text-2xl m-5 font-semibold">Your Cart</h1>

        <p className="text-2xl">Total Items:<span className="text-green-600 text-2xl">{totalqty}</span></p>

        {carts.map((e,i)=>(
            <div key={i+1} className="flex gap-150 bg-green-600 text-white">
            <p className="mx-35">{e.product}</p>
            <div>
           <p>{e.qty}</p>
           </div>
        </div>
        ))}
      </div>
      
    </>
  )
}

export default Cart
