
// import Inputs from "./Components/Inputs"
import Profile from "./Components/Profile"
import ProductCard from "./Components/ProductCard"
import Theme from "./Components/Theme"
import Students from "./Components/Students"
import Cart from "./Components/Cart"


const App = () => {


  return (
    <>
      <div>
        <Theme/>

        <br />
        <Cart/>
        <br />
      {/* <Inputs/> */}

      <Profile/>

      <br />
      <ProductCard/>
      </div>
      <br />
      <Students/>
    </>
  )
}

export default App
