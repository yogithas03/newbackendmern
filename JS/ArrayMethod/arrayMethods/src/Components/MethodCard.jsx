import { useNavigate } from "react-router-dom";

const MethodCard=({ item })=>{
  const navigate = useNavigate();

  return (
    <div
      className="method-card"
      onClick={() =>
        navigate(`/array-methods/${item.id}`)}  
        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300">
      <div className="text-5xl mb-4">{item.icon}</div>

      <h3 className="text-2xl font-semibold">{item.title}</h3>
    </div>
  );
}

export default MethodCard;