import useSearch from "../hooks/useSearch"



const Search = () => {

      const students = [
    { id: 1, name: "Shruthi", course: "React", age: 22 },
    { id: 2, name: "Rahul", course: "Java", age: 24 },
    { id: 3, name: "Priya", course: "Python", age: 21 },
    { id: 4, name: "Arun", course: "MERN", age: 23 },
    { id: 5, name: "Kavin", course: "React", age: 25 },
  ]

    const {search,setSearch,filterData,handleChange}=useSearch(students)

  
  return (
    <>

    <h1>Student Search</h1>

    <input type="text" placeholder="search...." value={search} onChange={handleChange}/>

    
    {filterData.map((student)=>(
        <div key={student.id}>
            <h3>{student.name}</h3>
            <h2>{student.course}</h2>
            <h3>{student.age}</h3>
        </div>
    ))}


      
    </>
  )
}

export default Search
