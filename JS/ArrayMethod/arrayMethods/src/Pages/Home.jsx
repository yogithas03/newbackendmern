import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import MethodGrid from "../Components/MethodGrid";
import Navbar from "../Components/Navbar";
import { arrayMethods } from "../data/arrayMethods";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    
    <section className="max-w-7xl mx-auto px-6 py-16">
       <h2 className="font-bold text-2xl mb-1">What is Array?</h2>

        <p>
          An Array is a special variable used to
          store multiple values in a <span className="text-purple-400">single variable</span>.
        </p>

        <pre className="mb-10 text-blue-300">
          {`const fruits = ["Apple","Banana","Orange"]`}
        </pre>

        <h2 className="text-4xl font-bold mb-10">Array Method Categories</h2>

    <MethodGrid methods={arrayMethods}/>
       
    </section>
 
    <Footer/>
    
    </>
  );
};
export default Home;
