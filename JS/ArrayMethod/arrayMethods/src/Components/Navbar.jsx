import { Link } from "react-router-dom";

const Navbar=()=>{
  return (
    <nav className="sticky top-0 z-50 glass px-10 py-4 flex justify-between items-center  border-b border-white/10 bg-[#0b1020]/80 backdrop-blur-lg">
      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">JS Array Master</div>

      <ul className="flex gap-10 text-gray-300">
        <li>
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
        </li>

        <li>
          <Link to="/array-methods" className="hover:text-cyan-400 transition">Array Methods</Link>
        </li>

        <li>
          <Link to="/quiz" className="hover:text-cyan-400 transition">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;