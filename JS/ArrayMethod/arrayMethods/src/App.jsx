import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ArrayMethods from "./Pages/ArrayMethods";
import MethodDetails from "./Pages/MethodDetails";
import Quiz from "./Pages/Quiz";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/array-methods"
        element={<ArrayMethods />}
      />

      <Route
        path="/array-methods/:id"
        element={<MethodDetails />}
      />

      <Route path="/quiz" element={<Quiz />} />
    </Routes>
    </div>
  );
}

export default App;