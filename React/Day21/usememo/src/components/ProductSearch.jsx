import React, { useMemo, useState } from 'react'

const ProductSearch = () => {

    const [theme,setTheme]=useState(true)

    const [search,setSearch]=useState("")

    const handleTheme=()=>{
        setTheme(!theme)
        console.log("theme");
        
    }

    const products = [
  {
    id: 1,
    productName: "iPhone 15",
    category: "Mobile",
    price: 79999,
    stock: 20,
    brand: "Apple"
  },
  {
    id: 2,
    productName: "Galaxy S24",
    category: "Mobile",
    price: 74999,
    stock: 15,
    brand: "Samsung"
  },
  {
    id: 3,
    productName: "OnePlus 12",
    category: "Mobile",
    price: 64999,
    stock: 25,
    brand: "OnePlus"
  },
  {
    id: 4,
    productName: "MacBook Air M3",
    category: "Laptop",
    price: 129999,
    stock: 8,
    brand: "Apple"
  },
  {
    id: 5,
    productName: "Dell Inspiron 15",
    category: "Laptop",
    price: 58999,
    stock: 12,
    brand: "Dell"
  },
  {
    id: 6,
    productName: "HP Pavilion",
    category: "Laptop",
    price: 62999,
    stock: 10,
    brand: "HP"
  },
  {
    id: 7,
    productName: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    stock: 18,
    brand: "Sony"
  },
  {
    id: 8,
    productName: "Boat Rockerz 450",
    category: "Headphones",
    price: 1999,
    stock: 40,
    brand: "Boat"
  },
  {
    id: 9,
    productName: "Apple Watch Series 9",
    category: "Smart Watch",
    price: 42999,
    stock: 9,
    brand: "Apple"
  },
  {
    id: 10,
    productName: "Samsung Galaxy Watch 7",
    category: "Smart Watch",
    price: 32999,
    stock: 14,
    brand: "Samsung"
  },
  {
    id: 11,
    productName: "Logitech MX Master 3S",
    category: "Accessories",
    price: 9999,
    stock: 30,
    brand: "Logitech"
  },
  {
    id: 12,
    productName: "Redmi Pad SE",
    category: "Tablet",
    price: 14999,
    stock: 22,
    brand: "Xiaomi"
  }
];

const handleSearch =(e)=>{
    setSearch(e.target.value)
      console.log("search")
}

const searchFun=(pro,sea)=>{

    return pro.filter((e)=>e.productName.toLowerCase().includes(sea.toLowerCase()))

  
}

const searchFilter = useMemo(()=>{
           return searchFun(products,search)
},[search])
  return (
    <>

    <div className='flex gap-24 justify-center bg-amber-800 p-4 '>
        <h1 className='text-2xl text-amber-50'>Product Search</h1>
        <button className='bg-amber-50 rounded-full p-1' onClick={handleTheme}>{theme?"Light":"Dark"}mode</button>
    </div>


    <div className={theme?"bg-white text-black h-screen" :"bg-black text-white h-screen"}>
    
    <div className='m-4'>

        <input type='search' placeholder='search...' className='border p-2' onChange={handleSearch} />
    </div>
    
    <table >
            <thead>
                <tr className='border-2'>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Brand</th>
                </tr>
            </thead>
            <tbody>
                {searchFilter.map((e,i)=>(
                    <tr key={i} className='border text-center'>
                        <td>{e.id}</td>
                        <td>{e.productName}</td>
                        <td>{e.category}</td>
                        <td>{e.price}</td>
                        <td>{e.stock}</td>
                        <td>{e.brand}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
      
    </>
  )
}

export default ProductSearch
