import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import MethodContent from "../components/MethodContent";
import { arrayMethods } from "../data/arrayMethods";

const MethodDetails=()=>{
  const { id } = useParams();

  const category = arrayMethods.find(
    (item) => item.id === id
  );

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>{category.title}</h1>

        {category.methods.map((method, index) => (
          <MethodContent key={index} method={method}/>))}
          
      </div>
    </>
  );
}

export default MethodDetails;