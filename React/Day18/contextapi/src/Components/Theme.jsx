import { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"



const Theme = () => {

    const {theme,handleClick}=useContext(ThemeContext)

    const lightTheme={
        background:"white",
        color:"black"
    }
    const darkTheme={
        background:"black",
        color:"white"
    }
  return (
    <>

    <div style={theme? lightTheme : darkTheme}>
        <button onClick={handleClick} className="bg-green-800 text-white p-3 rounded-lg mx-145 mt-3 w-30">Change</button>
       <div className="flex">
        <aside>
            <h1>My DashBoard</h1>
            <ul>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">🏠 Dashboard</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">📦 Products</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">🛒 Orders</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">👥 Customers</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">📊 Analytics</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">💳 Payments</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">📁 Files</li>
          <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">⚙️ Settings</li>
          <li className="hover:bg-red-600 p-2 rounded cursor-pointer">🚪 Logout</li>
            </ul>
            </aside>
            <header className="grid-cols-2">
                <h2 >DashBoard</h2>
                <div className="flex items-center gap-5">
                <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            </header>
          <main className="flex gap-50">
            <div className="bg-green-800 rounded-lg my-40 p-4 mx-5 mt-10">
                <h1 className="text-white">Total Sales </h1>
                <h1 className="text-3xl font-bold mt-2">₹1,25,000</h1>
              <p className="text-sm text-gray-400 mt-3">
                Sales generated this month.
              </p>
            </div>
             <div className="bg-green-800 rounded-lg my-40 p-4 mx-5 mt-10">
                <h1 className="text-white">Total Sales </h1>
                <h1 className="text-3xl font-bold mt-2">1250</h1>
              <p className="text-sm text-gray-400 mt-3">
                 Orders received today.
              </p>
            </div>
             <div className="bg-green-800 rounded-lg my-40 p-4 mx-5 mt-10">
                <h1 className="text-white">New Customers</h1>
                <h1 className="text-3xl font-bold mt-2">325</h1>
              <p className="text-sm text-gray-400 mt-3">
                 Customers joined this month.
              </p>
            </div>
          </main>
        </div>
        

    </div>
    
      
    </>
  )
}

export default Theme
