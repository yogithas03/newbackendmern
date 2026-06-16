import { FaSchoolFlag } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";

const DashBoard = ({dashboard}) => {



  return (
    <>
     

          
        <h1><FaSchoolFlag />School Management System</h1>
        <div>
            <h1><FaSchool />Total School{dashboard.length}</h1>

            <h1><GiTeacher />Total Students</h1>
               {dashboard.reduce((acc,e)=>acc+e.students,0)}

            <h1><PiStudentBold />Total Teachers</h1>
             {dashboard.reduce((acc,e)=>acc+e.teachers,0)}
        </div>
        
          {dashboard.sports?.map((e,i)=>(
            <p key={i}>{e}</p>
          ))}

        <div>
            <h1>Schools</h1>
            <div>
                <h1></h1>
            </div>
        </div>
    
      


     
      
    </>
  )
}

export default DashBoard
