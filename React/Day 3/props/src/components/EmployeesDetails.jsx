

const EmployeesDetails = ({companyName,employeeName,employeeRole,employeeSalary}) => {
  return (
    <>
     <h1>Company Dashboard</h1>

      <h2>Company Name: {companyName}</h2>
      <h2>Employee Name: {employeeName}</h2>
      <h2>Employee Role: {employeeRole}</h2>
      <h2>Employee Salary: ₹{employeeSalary}</h2>

      
    </>
  )
}

export default EmployeesDetails
