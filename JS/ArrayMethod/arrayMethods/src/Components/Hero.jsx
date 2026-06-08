import { useNavigate } from "react-router-dom";
import heroImage from "../assets/Version control-amico.svg";



const Hero=()=>{
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex justify-center items-center text-center px-6">
      <div className="text-3xl font-bold gradient-text">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">Master JavaScript Array Methods</h1>

        <p className="mt-8 text-xl text-center text-gray-400">
          Learn Array Creation, Access, Add, Remove, Search,
          Copy, Convert, Sort, Reverse and Higher Order Methods</p>

        <button
          onClick={() => navigate("/array-methods")}
          className="mt-12 px-12 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-2xl font-bold shadow-lg shadow-cyan-500/30 hover:scale-105 transition duration-300">
          Explore Methods
        </button>
        <div className="flex-1 flex justify-center">
        <img
          src={heroImage}
          alt="Array Methods"
          className="absolute right-10 top-100 w-[320px] opacity-90"/>
      </div>
      </div>
    </section>
  );
}

export default Hero;