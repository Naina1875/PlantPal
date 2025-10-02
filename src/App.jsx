import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Initial from "./Pages/Initial";
import Home from "./Pages/Home";
import Plantlib from "./Pages/Plantlib"
import Features from "./Pages/Features"
import StartWatering from "./Pages/StartWatering";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plantlib" element={<Plantlib />} />
        <Route path="/features" element={<Features />} />
        <Route path="/startwatering" element={<StartWatering />} />
      </Routes>
    </Router>
  );
}

export default App;
