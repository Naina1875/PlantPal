import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Initial from "./Pages/Initial";
import Home from "./Pages/Home";
import Plantlib from "./Pages/Plantlib"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plantlib" element={<Plantlib />} />
      </Routes>
    </Router>
  );
}

export default App;
