import Footer from "./components/Footer"
import Header from "./components/Header"
import SchoolsCard from "./components/SchoolsCard"
import SchoolStats from "./components/SchoolStats"
import CourseDetails from "./components/CourseDetails"
import SchoolDetails from "./components/SchoolDetails"






const App = () => {

return (
    <>

    <Header />
    <SchoolStats/>
    <SchoolsCard/>
    <Footer/>
    <div className="bg-black">
      <SchoolDetails/>
      <CourseDetails/>
      </div>

      
     

    </>
  )
}

export default App
