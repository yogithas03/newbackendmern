import Product from "./Product"


const ProductDet = () => {

    const products = {prodNam:"Laptop",prodPri:"$450",prodcat:"Electronic",prodBra:"HP"}
  return (
    <>
    <div className="bg-green-950 text-white text-center">
    <Product pro={products}/>
    </div>
      
    </>
  )
}

export default ProductDet
