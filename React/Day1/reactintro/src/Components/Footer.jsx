import { IoLocationSharp } from "react-icons/io5";
import { FcCallback } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
    <div className="bg-black text-amber-50 border-0 rounded mt-2.5 text-center ">
        <h4 className="font-bold">Contact</h4>
         <h4 className="mt-2 flex items-center justify-center gap-2"><SiGmail className="text-2xl text-[#EA4335]"/>info@objectways.com</h4>
        <h4 className="mt-2 flex items-center justify-center gap-2 "><FcCallback />+91 90000 34000</h4>
        <h4 className="mt-2 flex items-center justify-center gap-2"><IoLocationSharp className="text-green-500 text-2xl" />Chennai</h4>
        <h3 className="mt-2  ">Follow Us</h3>
        <p className="mt-2 flex items-center justify-center gap-2"><GrLinkedin className="text-blue-950"/>LinkedIn |<ImGithub/> GitHub | <RiInstagramFill className="text-pink-800"/>Instagram | <BiLogoFacebookCircle className="text-blue-600"/>Facebook</p>
        <p className="mt-2 flex items-center justify-center gap-2">© 2026 Objectways. All Rights Reserved.</p> 
    </div>
      
    </>
  )
}

export default Footer
