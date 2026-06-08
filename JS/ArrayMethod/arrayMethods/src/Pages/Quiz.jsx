import Navbar from "../Components/Navbar";
import QuizCard from "../Components/QuizCard";
import { quizData } from "../data/quizData";

const Quiz=()=>{
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16">
       
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Array Methods
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Quiz
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Test your JavaScript Array Methods knowledge with interactive questions.
          </p>
        </div>

       
        <div className="max-w-5xl mx-auto mt-16 space-y-10">
          {quizData.map((item, index) => (
            <QuizCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;