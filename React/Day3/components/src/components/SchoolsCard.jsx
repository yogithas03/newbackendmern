import { schools } from "./school";

const SchoolsCard = () => {
  return (
    <>
    <div className="bg-blue-950 mt-2 text-white text-center">
        <h1>Schools</h1>
    </div>
    <div className="flex justify-between">
        {schools.map((school)=>(
            <div key={school.id} className="border p-8 m-4 rounded-lg bg-blue-950 text-white text-center w-90">
            <h1>{school.schoolName}</h1>
            <h1>PrincipalName: {school.principalName}</h1>
            <h1>City: {school.city}</h1>
      

        <div className="flex gap-2 justify-center">
            <h1>Sports:</h1>
            <h1>{school.sports?.map((sport,i)=>(<p key={i}>{sport}</p>))}</h1>
        </div>
        </div>
     ))}
     </div>
     
    
      
    </>
  )
}

export default SchoolsCard
