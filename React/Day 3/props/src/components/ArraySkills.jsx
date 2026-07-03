import Skills from "./Skills"


const ArraySkills = () => {
    const skill=["HTML","CSS","JAVASCRIPT","REACT","Node.JS"]
  return (
    <>
    <div className="bg-pink-950 text-amber-50 text-center">
    <Skills skilldet ={skill}/>
    </div>
      
    </>
  )
}

export default ArraySkills
