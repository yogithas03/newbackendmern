const QuizCard=({ question, options ,answer})=>{
  const checkAnswer = (option)=>{
    if (option===answer) {
      alert("your answer is CORRECT")
    }else{
      alert("your answer is WRONG")
    }
  }
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold mb-6">
        {question}
      </h3>

      <div className="flex flex-wrap gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => checkAnswer(option)}
            className="px-6 py-3 rounded-xl bg-slate-800">
        {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;