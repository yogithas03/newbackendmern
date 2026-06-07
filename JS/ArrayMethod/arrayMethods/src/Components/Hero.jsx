import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center py-24">
      <h1 className="text-6xl font-bold">
        Master JavaScript Array Methods
      </h1>

      <button
        onClick={() => navigate("/methods")}
        className="mt-8 bg-sky-500 px-6 py-3 rounded-lg"
      >
        Explore Methods
      </button>
    </section>
  );
};

export default Hero;