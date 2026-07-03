

const Employee = ({empName,empId,dep,sal,exp}) => {


  return (
    <>
    <div className="bg-purple-300 text-purple-950">
    <h1>Employee Card</h1>
    <h4>Name:{empName}</h4>
    <h4>ID:{empId}</h4>
    <h4>Department:{dep}</h4>
    <h4>Salary:{sal}</h4>
    <h4>Experience:{exp}</h4>
      </div>
    </>
  )
}

export default Employee
