import DashBoard from "./DashBoard";


const DashBoardDetails = () => {
   
    const schoolDetails = [
  {
    id: 1,
    schoolName: "DAV Public School",
    principalName: "R. Meenakshi",
    city: "Chennai",
    students: 1800,
    teachers: 95,
    sports: ["Cricket", "Football", "Basketball"]
  },
  {
    id: 2,
    schoolName: "Kendriya Vidyalaya",
    principalName: "S. Rajesh",
    city: "Coimbatore",
    students: 1500,
    teachers: 80,
    sports: ["Cricket", "Volleyball", "Athletics"]
  },
  {
    id: 3,
    schoolName: "Velammal Vidyalaya",
    principalName: "P. Lakshmi",
    city: "Madurai",
    students: 2200,
    teachers: 120,
    sports: ["Football", "Basketball", "Tennis"]
  },
  {
    id: 4,
    schoolName: "PSBB Senior Secondary School",
    principalName: "K. Narayanan",
    city: "Chennai",
    students: 2500,
    teachers: 140,
    sports: ["Cricket", "Badminton", "Basketball"]
  },
  {
    id: 5,
    schoolName: "Chettinad Vidyashram",
    principalName: "V. Priya",
    city: "Chennai",
    students: 1700,
    teachers: 90,
    sports: ["Football", "Tennis", "Athletics"]
  }
];
  return (
    <>
    {schoolDetails.map((school)=>(
        <DashBoard key={school.id} 
        dashboard={school}/>
    ))}
  
    </>
  )
}

export default DashBoardDetails
