import Courses from "./Courses";


const CourseDetails = () => {


    const schools = [
  {
    id: 1,
    schoolName: "DAV Public School",
    courses: ["LKG", "UKG", "Primary", "High School"]
  },
  {
    id: 2,
    schoolName: "Kendriya Vidyalaya",
    courses: ["Primary", "Middle School", "High School"]
  },
  {
    id: 3,
    schoolName: "Velammal Vidyalaya",
    courses: ["LKG", "UKG", "Primary", "Higher Secondary"]
  },
  {
    id: 4,
    schoolName: "PSBB Senior Secondary School",
    courses: ["Primary", "Middle School", "High School", "Higher Secondary"]
  },
  {
    id: 5,
    schoolName: "Chettinad Vidyashram",
    courses: ["LKG", "UKG", "Primary", "Middle School"]
  },
  {
    id: 6,
    schoolName: "SBOA School & Junior College",
    courses: ["Primary", "Middle School", "High School"]
  },
  {
    id: 7,
    schoolName: "National Public School",
    courses: ["LKG", "UKG", "Primary", "High School", "Higher Secondary"]
  },
  {
    id: 8,
    schoolName: "The Hindu Senior Secondary School",
    courses: ["Primary", "Middle School", "Higher Secondary"]
  }
];
  return (
    <>
    <div className="grid gap-4 justify-center">
    {schools.map((school)=>(
        <Courses key={school.id} courses={school}/>
    ))}
      </div>
    </>
  )
}

export default CourseDetails
