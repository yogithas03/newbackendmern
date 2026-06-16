

const Courses = ({courses}) => {
  return (
    <>
    <div className="text-purple-900 bg-purple-400 shadow-2xl rounded-lg text-center hover:scale-150 hover:shadow-purple-950 transition-all duration-300 cursor-pointer">
    <h1 className="text-2xl">Id:{courses.id}</h1>
    <p>School Name:{courses.schoolName}</p>
    <p className="font-semibold">Courses</p>
    <div className="bg-white  flex flex-wrap gap-2 justify-center p-4">
    {courses.courses?.map((e,i)=>(
        <p className="border rounded-lg p-2 bg-purple-400" key={i}>{e}</p>
    ))}
    </div>
    </div>
      
    </>
  )
}

export default Courses

