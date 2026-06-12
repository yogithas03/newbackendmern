


const Cards = () => {
  return (
    <>
    <div className="flex justify-between gap-2">
    <StudentsProfile/>
    <EmpolyeeCard/>
    <ProductCard/>
    <MovieDetails/>
    <CompanyInfo/>
      </div>
    </>
  )
}

export default Cards



export const StudentsProfile = () => {
  return (
    <>
    <div className=" bg-[#020411] text-white text-shadow-white border-2 rounded-xl mt-1.5 text-center h-60 w-56">
       <h1>Student's Profile</h1>
       <div className="w-20 ml-16">
        <img src="./yogi.jfif" alt="yogitha"/>
       </div>
       <h2>Student Name: YOGITHA S</h2>
       <h3>Course: Mern Stack</h3>
       <h4>City: Chennai</h4>
       <h5>Institute: SLA Institute</h5>
    </div>
   </>
  )
}

export const EmpolyeeCard =()=>{
  return(
    <>
    <div className=" bg-[#0f0f26] text-white text-shadow-white border-2 rounded-xl mt-1.5 text-center h-60 w-60">
      <h1>Employee Card</h1>
      <div className="w-20 ml-19">
        <img src="./gow.jfif" alt="gowtham"/>
      </div>
      <h2>Employee Name: GOWTHAM R</h2>
      <h2>Employee ID: 389</h2>
      <h2>Department: JAVA Developer</h2>
      <h2>Salary:3LPA</h2>
    </div>
    </>
  )
}

export const  ProductCard = ()=>{
  return(
    <>
    <div className="bg-white text-black border-2 rounded mt-1.5 text-center">
      <h1>Product Card</h1>
      <div className="w-60 ml-5">
        <img src="iphone.webp" alt="iphone"/>
      </div>
      <h2>Product Name: iphone 15</h2>
      <h2>Product Price: ₹79,999</h2>
      <h2>Product Category: Electronics</h2>
      <p className="w-2xs">Product Description: The iPhone 15 Pro features a 6.1-inch Super Retina XDR display, 
        A17 Pro chip, 48MP camera system, titanium design.</p>
    </div>
    </>
  )
}

export const MovieDetails = ()=>{
  return(
    <>
    <div className="bg-black text-white text-shadow-2xs border-2 rounded mt-1.5 text-center">
      <h1>Movie Details</h1>
      <div className="w-60">
        <img src="./Maryan.jpg" alt="Maryan"/>
      </div>
      <h2>Movie Name: Maryan</h2>
      <h2>Hero Name: Dhanush</h2>
      <h2>Director Name: Bharat Bala</h2>
      <h2>Release Year: 2013</h2>
    </div>
    </>
  )
}

export const CompanyInfo = ()=>{
  return(
    <>
    <div className="bg-black text-white text-shadow-2xs border-2 rounded mt-1.5 text-center h-110">
      <h1>Company Info</h1>
      <div className="w-60">
         <img src="./logo1.png" alt="objectways"/>
      </div>
      <h2>Company Name: Objectways</h2>
      <h2>Location: Karur</h2>
      <h2>Founder: Ravi Kumar</h2>
      <h2>Established Year: 2020</h2>

    </div>
    </>
  )
}


