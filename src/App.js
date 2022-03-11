import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loan from "./components/Views/Loan";
import About from "./components/Views/About";
import Faq from "./components/Views/Faq";
import Apply from "./components/Views/Apply";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/loan" element={<Loan/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/apply" element={<Apply/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
