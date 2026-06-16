
import { schools } from "./school";
import { FaSchool } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";

const SchoolStats = () => {

  const totalSchools = schools.length;
  const totalStudents = schools.reduce((acc,e)=> acc+e.students,0)
  const totalTeachers = schools.reduce((acc,e)=>acc+e.teachers,0)
  return (
    <>
    <div className="flex flex-wrap justify-center gap-8">
        <div className="rounded-lg p-2 mt-3 bg-blue-950 text-white text-2xl">
        <h2><FaSchool />Total Schools </h2>
        <p className="text-center">{totalSchools}</p>
        </div>

        <div className="rounded-lg p-2 mt-3 bg-blue-950 text-white text-2xl">
        <h2><PiStudentBold/>Total Students </h2>
        <p className="text-center">{totalStudents}</p>
        </div>

        <div className="rounded-lg p-2 mt-3 bg-blue-950 text-white text-2xl">
        <h2><GiTeacher/>Total Teacher </h2>
        <p className="text-center">{totalTeachers}</p>
        </div>

    </div>
      
    </>
  )
}

export default SchoolStats
