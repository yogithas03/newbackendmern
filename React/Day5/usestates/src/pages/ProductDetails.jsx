import { useState } from "react"


const ProductDetails = () => {
   
    const [prod,setProd]=useState(undefined)
    const changeUser = ()=>{
        const data = prod === undefined ?" name: Laptop' price: 50000 category: 'Electronics'" : undefined;
        setProd(data)
    }



  return (
    <>
    <div className="text-center">
        <p className="text-blue-700 text-center"> Product Details</p>
        {prod}
        <div className="text-center">
            <button className="bg-blue-600 text-white p-3 mt-4 rounded-lg w-45" onClick={changeUser}>Change User</button>
        </div>


    </div>
      
    </>
  )
}

export default ProductDetails
