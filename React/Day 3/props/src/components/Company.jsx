
import EmployeesDetails from "./EmployeesDetails"


const Company = ({companyName,employeeName,employeeRole,employeeSalary}) => {
  return (
    <>
    <div className="bg-black text-white">
    <EmployeesDetails companyName={companyName} employeeName={employeeName} employeeRole={employeeRole} employeeSalary={employeeSalary}/>
    </div>
      
    </>
  )
}

export default Company
