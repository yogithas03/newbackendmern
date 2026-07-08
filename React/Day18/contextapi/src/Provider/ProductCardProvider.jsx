import { useState } from "react"
import ProductCardContext from "../Context/ProductCardContext"


const ProductCardProvider = ({children}) => {


    const [product,setProduct]=useState([])


   const handleClick = () =>{
          setProduct([{id:1,title:"Laptop",price:50000},{id:2,title:"Mobile",price:20000}])
   }







  return (
    <>
    <ProductCardContext.Provider value={{product,setProduct,handleClick}}>
        {children}
    </ProductCardContext.Provider>
      
    </>
  )
}

export default ProductCardProvider
