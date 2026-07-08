import { useContext } from "react"
import ProductCardContext from "../Context/ProductCardContext"


const ProductCard = () => {

    const {product,handleClick}=useContext(ProductCardContext)
  return (
    <>
    <div className="mx-20">
     <button className="bg-green-800 text-white p-4 rounded-lg" onClick={handleClick}>Show Data</button>
    {product.map((e,i)=>(
        <div key={i+1}>
        <p>{e.title}</p>
        <p>{e.price}</p>
        <br/>
    </div>
    ))}
    </div>
      
    </>
  )
}

export default ProductCard
