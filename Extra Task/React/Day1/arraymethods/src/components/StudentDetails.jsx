


const StudentDetails = () => {

 const students = [ { id: 1, name: "Ravi", marks: 80 }, 
                    { id: 2, name: "Priya",marks: 95 }, 
                    { id: 3, name: "Arun", marks: 60 } ]

const getTopper = ()=>{
    const highestMarks = Math.max(...students.map(student=>student.marks))
    return students.find(student => student.marks === highestMarks)
}
const getAverage = () => {
    const total = students.reduce((sum, student) => sum+student.marks,0)
    return (total/students.length)
  };

const getPassedStudents = ()=>{
   return students.filter(student => student.marks>= 70)

}
const topper = getTopper();
const average = getAverage();
const passedStudents = getPassedStudents();
   



  return (
    <>
     <div >

         <h1 className="bg-blue-900 text-white text-center p-3">Student Dashboard</h1>
         <h2 className="text-center ">Topper</h2>
         <p className="text-center ">{topper.name}-{topper.marks}</p>

         <h2 className="bg-blue-900 text-white text-center p-3">Average Marks</h2>
         <p className="text-center ">{average}</p>

         <h2 className="bg-blue-900 text-white text-center p-3">Passed Students</h2>
         {passedStudents.map((student)=>(
            <p key={student.id} className="text-center">{student.name}-{student.marks}</p>
         ))}




     </div>
   

    
    
    
    </>
      

  )
}

export default StudentDetails
