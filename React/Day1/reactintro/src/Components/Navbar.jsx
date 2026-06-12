import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="bg-black p-3 flex justify-between items-center ">
        <Logo/>
        
        <Linkes/>
    </div>
      
    </>
  )
}

export default Navbar

export const Logo = () =>{
    return(
        <>
        <div className="w-22 mx-1 p-2 flex ">
        <img src="./logo1.png" alt="objectways"/>
        <h1 className="text-white text-3xl font-semibold mt-4 p-2">OBJECTWAYS</h1>
        </div>
        </>
        
    )
}

export const Linkes = () =>{
    return(
        <>
        <div className="text-[#b8ea5c] flex gap-15 mt-4">
            <Link>Product</Link>
            <Link>Services</Link>
            <Link>Company</Link>
            <Link>About Us</Link>
            <Link>Contact Us</Link>

        </div>
        </>
    )
}

