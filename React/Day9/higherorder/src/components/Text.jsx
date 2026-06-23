

const Text = ({course,onclick}) => {
  return (
    <>
    <div className="bg-red-950 rounded-lg mx-130 text-white text-center p-4">
      <div>
        <p>{course}</p> 
        <button className="bg-green-700 p-2 rounded-lg mt-3"onClick={onclick}>Click</button>
    </div>
    </div>
   
   
      
    </>
  )
}

export default Text
