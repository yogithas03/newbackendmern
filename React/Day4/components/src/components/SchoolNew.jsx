

const SchoolNew = ({schoolDetails}) => {
 


  return (
    <>
 <div className="w-80 bg-blue-950 text-amber-50 shadow-2xl border rounded-lg p-5 hover:scale-105 hover:shadow-blue-500 transition-all duration-500 cursor-pointer">
      <p className="text-center font-bold">Id{schoolDetails.id}</p>
      <p>School Name: {schoolDetails.schoolName}</p>
      <p>City: {schoolDetails.city}</p>
      <p>Principal Name: {schoolDetails.principal?.name}</p>
      <p>Principal Experience: {schoolDetails.principal?.experience}</p>
       <p>___________________________________________</p>
      <p className="font-bold text-center">Courses</p>
      {schoolDetails.courses?.map((e, i) => (
        <p className="text-center" key={i}>{e}</p>
      ))}
       <p>___________________________________________</p>
      <p  className="font-bold text-center">Sport</p>
      {schoolDetails.sports?.map((e,i)=>(
        <p className="text-center" key={i}>{e}</p>
      ))}
       <p>___________________________________________</p>
      <p className="text-center">Students:{schoolDetails.students}</p>
      <p className="text-center">Teachers:{schoolDetails.teachers}</p>
  </div>    
    </>
  )
}

export default SchoolNew
