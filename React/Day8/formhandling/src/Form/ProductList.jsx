import { useState } from "react"


const ProductList = () => {

    const [product,setProduct]=useState("")
    const [dispro,setDisPro]  =useState([])

    const showProduct = (e)=>{
         e.preventDefault()
         setDisPro([...dispro,product]);
         setProduct("")
    }
  return (
    <>
       <div className="text-center bg-blue-800 text-white">
        <p>Product List Creator</p>
    </div>
    <form>
        <div className="text-center mt-6">
        <label htmlFor="product">Product Name </label>
        <input type="text" id="product" value={product} 
         onChange={(e)=>{setProduct(e.target.value)}} className="border rounded-lg p-2 mt-5"/>
        <button className="bg-green-700 p-2 ml-3 rounded text-white" onClick={showProduct}>Click</button>
       
        <div>
            {dispro.map((data,i)=>(
              <p key={i+1}>{data}</p>
            ))}
         </div>


        </div>

    </form>

      
    </>
  )
}

export default ProductList
