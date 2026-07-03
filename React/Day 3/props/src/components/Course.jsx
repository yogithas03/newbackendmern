

const Course = ({courseName,duration,fees}) => {
  return (
    <>
    <div className="border rounded text-center w-2xs bg-blue-950 text-white">
   
 
    <h1>Course Details</h1>
    <h4>Course Name:{courseName}</h4>
    <h4>Duration:{duration}</h4>
    <h4>fees:{fees}</h4>
     </div>
    </>
  )
}

export default Course
