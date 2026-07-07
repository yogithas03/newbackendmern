import { useRef } from "react";
import { GiScrollUnfurled } from "react-icons/gi";
import Resume from "./Resume";
import Toggle from "./Toggle";
import Display from "./Display";

const Home = () => {

    const homeRef=useRef()
    const aboutRef=useRef()
    const contactRef=useRef()

    const home = ()=>{
        homeRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }
    const about = ()=>{
        aboutRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }
    const contact = ()=>{
        contactRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }
    const scrollTop = ()=>{
        
         window.scrollTo({
            top:0,
            behavior:"smooth"
         })
    }




  return (
    <>
    <div  className="flex justify-between text-xl text-[#d0b499] bg-black p-4">
        <h2 className="text-2xl font-bold">info web</h2>
    
    <div className="flex gap-24 text-xl text-[#d0b499]">
        <button onClick={home}>Home</button>
        <button onClick={about}>About</button>
        <button onClick={contact}>Contact</button>
    </div>
    </div>
    <div className="bg-black text-white">
    <section ref={homeRef}>
        <h1 className="text-2xl text-[#d0b499] text-center">Welcome to My Website</h1>
        <p>Welcome to our website! We are dedicated to providing high-quality services and creating
         meaningful digital experiences. Our goal is to build modern, responsive, and user-friendly 
         web applications that solve real-world problems.</p>
         <br />
         <p>Whether you're exploring our work, learning about our team, or getting in touch, we're glad you're here.</p>
         <br />
         <h2 className="text-2xl text-[#d0b499] text-center">Why Choose Us?</h2>
         <br />
         <ul className="text-center">
            <li>Responsive Website Design</li>
            <li>Modern UI/UX</li>
            <li>Fast Performance</li>
            <li>Clean & Secure Code</li>
            <li>Customer Satisfaction</li>
         </ul>
         <br />
         <h2 className="text-2xl text-[#d0b499] text-center">Get Started Today!</h2>
    </section>
    <br />

    <section ref={aboutRef}>

        <h1 className="text-2xl text-[#d0b499] text-center">About Us</h1>
        <br />
        <p>We are passionate web developers who love creating beautiful and functional websites using 
        modern technologies like HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS.</p>
        <p>Our mission is to deliver websites that are visually appealing, easy to use, and optimized 
            for performance across all devices.</p>
        <br/>
        <h3 className="text-2xl text-[#d0b499] text-center">Our Vision</h3>
         <br/>
         <p className="text-center">To build innovative digital solutions that help individuals and businesses grow online.</p>
        <br/>
        <h2 className="text-2xl text-[#d0b499] text-center">Our Mission</h2>
        <ul className="text-center">
            <li>Develop high-quality web applications</li>
            <li>Learn and adopt new technologies</li>
            <li>Deliver user-friendly experiences</li>
            <li>Maintain clean and efficient code</li>
        </ul>
        <br/>
        <h1 className="text-2xl text-[#d0b499] text-center">Technologies We Use</h1>
        <ul className="text-center">
           <li>HTML5</li>
           <li>CSS3</li>
           <li>JavaScript (ES6+)</li>
           <li>React.js</li>
           <li>Bootstrap</li>
           <li>Tailwind CSS</li>
           <li>Node.js</li>
           <li>Express.js</li>
           <li>MongoDB</li>
        </ul>
        </section>
        <br />

        <section ref={contactRef}>
            <h1 className="text-2xl text-[#d0b499] text-center">Contact Us</h1>
            <br />
            <p className="text-center">We'd love to hear from you! Feel free to reach out if you have any questions, suggestions, or project ideas.</p>
            <br/>
            <p className="text-2xl text-[#d0b499] text-center">Address</p>
            <br />
            <p className="text-center">123 Main Street,</p>
            <p className="text-center">Chennai, Tamil Nadu,</p>
            <p className="text-center">India </p>
            <br />
            <p className="text-2xl text-[#d0b499] text-center">Phone</p>
            <p className="text-center">+91 98765 43210</p>
            <br />
            <p className="text-2xl text-[#d0b499] text-center">Email</p>
            <p className="text-center">info@example.com</p>
            <br/>



        </section>
    </div>
    <div className="flex justify-end text-3xl text-[#d0b499] bg-black">
        <button onClick={scrollTop}><GiScrollUnfurled /></button>
    </div>

    <Resume/>
    <Toggle/>
    <Display/>

      
    </>
  )
}

export default Home

