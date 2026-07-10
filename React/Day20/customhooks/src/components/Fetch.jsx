import useFetch from "../hooks/useFetch"


const Fetch = () => {

    const {show,loading,error,handleChange}=useFetch("https://dummyjson.com/carts")


    if(loading){
        return <h1>Loading....</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

  return (
    <>

     

    {show.map((e)=>(
        <div key={e.id}>
            <p>Cart Id:{e.id}</p>
           {e.products.map((product)=>(
            <div key={product.id}>
             <p>Product Id:{product.id}</p>
             <p>Title:{product.title}</p>
             <p>Price:{product.price}</p>
             <p>Quantity{product.quantity}</p>
             </div>
           ))}
        </div>
    ))}


      
    </>
  )
}

export default Fetch
