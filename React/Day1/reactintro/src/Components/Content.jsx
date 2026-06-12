
import { IoRocketSharp } from "react-icons/io5";
const Content = () => {
  return (
    <>
    <div className="h-screen">
        <section className="bg-slate-200 border-0 mt-2.5 text-center">
        <h1 className="font-bold flex justify-center">Transforming Ideas Into Digital Solutions<IoRocketSharp className="w-3 "/></h1>
        <p >We build scalable web, mobile, cloud, and AI-powered applications that 
          help businesses grow faster and serve customers better.</p>
        </section>
        <div className="flex justify-between items-start mt-25 px-10">
        <div className=" w-1/2">
          <p>We help organizations transform their ideas into successful digital products.
             Objectways uses modern technologies to build user-friendly and reliable applications.
             Our solutions are designed to improve productivity, efficiency, and customer engagement.
             We follow industry best practices to ensure quality and timely project delivery.
             Customer satisfaction and long-term partnerships are at the core of our business.
             We continuously innovate to meet the evolving needs of the digital world.
             Objectways is committed to empowering businesses through technology and innovation.</p>
        </div>
         <div className="w-1/2 flex justify-end">
          <Sideimg/>
        
        </div>
        </div>
       
    <div className="flex gap-7">
      <button className="border-[#b8ea5c] bg-[#b8ea5c] rounded-xl mt-5 ml-20 p-3">Get Started </button>
      <button className="border-[#b8ea5c] bg-[#b8ea5c] rounded-xl mt-5 ml-20 p-3">Contact Us</button>
      
    </div>
  
   </div>
      
    </>
  )
}

export default Content

export const Sideimg = () =>{

  return(
    <>
    <div>
      <img src="./image1.png" alt="working" className="w-[500px] h-auto rounded-lg"/>

    </div>
    </>
  )
}
