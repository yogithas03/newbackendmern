import GrandParent from "./GrandParent"


const Child = ({name,course}) => {
  return (
    <>
    <GrandParent name={name} course={course}/>
      
    </>
  )
}

export default Child
