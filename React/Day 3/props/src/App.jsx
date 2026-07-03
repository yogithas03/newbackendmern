import ArraySkills from "./components/ArraySkills"
import Company from "./components/Company"
import Course from "./components/Course"
import Employee from "./components/Employee"
import Parent from "./components/Parent"
import ProductDet from "./components/ProductDet"
import StudentCard from "./components/StudentCard"
import UserCard from "./components/UserCard"



const App = () => {


  const companyName="Tech Solutions Pvt Ltd";
  const employeeName="Shruthi";
  const employeeRole="React Developer";
  const employeeSalary=25000;
  const studentinfo = {name:"yogitha",
        age:24,course:"Mernstack",city:"chennai"
    }

  const user ={username:"pepper",email:"pepper2803@gmail.com",phone:"7904305880",city:"Chennai"}
  return (
    <>
    <Company companyName={companyName} employeeName={employeeName} employeeRole={employeeRole} 
    employeeSalary={employeeSalary}/>
 
    <StudentCard information={studentinfo} />
    <Employee empName="Mahi" empId ="EMP223" dep="Development" sal="25000" exp = "2years"/>
   
    <ProductDet/>
    <ArraySkills/>
    <div className="flex-col ">
    <UserCard userdetail={user}/>
    </div>

    <Parent name="sudhan" course="Mern"/>
    <div className="flex justify-between">
    <Course  courseName="MERN Stack"
        duration="6 Months"
        fees={45000}/>
    <Course  courseName="Full Stack"
        duration="8 Months"
        fees={35000}/>
    <Course  courseName="JAVA Developer"
        duration="12 Months"
        fees={25000}/>
    </div>
    </>
  )
}

export default App
