



const MethodContent=({ method })=>{
  return (
    <div className="content-card">

      <h3 className="text-4xl font-bold text-white mb-4">{method.name}</h3>

      <p className="text-gray-400 text-lg leading-relaxed mb-6">{method.definition}</p>

      

      <pre>{method.example}</pre>

      

    </div>
  );
}

export default MethodContent;