
const StudentCard = ({ information }) => {
   
  return(
    <>
    <div className="bg-orange-300 text-orange-600">
    <h1>Student's Card</h1>
    <h4>Name:{information.name}</h4>
    <h4>Age:{information.age}</h4>
    <h4>Course:{information.course}</h4>
    <h4>City:{information.city}</h4>
    </div>
    </>
   
)
}
export default StudentCard
