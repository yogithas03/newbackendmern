import { useState } from "react"


const ProductManagement  = () => {

    const [datas,setDatas]=useState({productname:"",price:"",category:"",brand:""})
    const [showed,setShowed]=useState([])

    const handleChange = (e) => {
        const {name,value} = e.target
        setDatas({...datas,[name]:value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        setShowed((prev)=>[...prev,datas])
        setDatas({productname:"",price:"",category:"",brand:""})
       }

    return (
    <>
    <form onSubmit={handleClick}>

        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Product Name </label>
            <input type="text" name="productname" value={datas.productname} onChange={handleChange} placeholder="enter the Name"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Price</label>
            <input type="number" name="price" value={datas.price} onChange={handleChange} placeholder="enter the Id"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Category</label>
            <input type="text" name="category" value={datas.category} onChange={handleChange} placeholder="enter the Department"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex items-center gap-2 mt-3">
            <label className="text-xl text-right w-150">Brand</label>
            <input type="text" name="brand" value={datas.brand} onChange={handleChange} placeholder="enter the Salary"
             className="border-2 rounded-l p-2"/>
        </div>
        <div className="flex justify-center mt-3 ml-10">
            <button type="submit" className="bg-blue-700 text-white rounded-lg w-25 p-3">Submit</button>
        </div>

</form>

<div>
    {showed.map((e,i)=>(
        <div key={i+1} className="border rounded-lg p-4 shadow-2xl w-50 mt-3 ml-3">
            <p>{e.productname}</p>
            <p>{e.price}</p>
            <p>{e.category}</p>
            <p>{e.brand}</p>
        </div>
    ))}
</div>

    
      
    </>
  )
}

export default ProductManagement 
