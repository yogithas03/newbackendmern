import MethodCard from "./MethodCard";

const MethodGrid=({ methods })=>{
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {methods.map((item) => (
        <MethodCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default MethodGrid;