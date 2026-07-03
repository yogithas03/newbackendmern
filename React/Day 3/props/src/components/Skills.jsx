

const Skills = ({skilldet}) => {
  return (
    <>
    <h1>Skills</h1>
    {skilldet.map((e,i)=>(
      <p key={i+1}>{e}</p>
    ))}
      
    </>
  )
}

export default Skills
