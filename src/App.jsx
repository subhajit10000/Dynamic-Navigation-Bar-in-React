import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import FAQ from "./pages/Faq";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>

      {/* <div className="h-50 w-50 bg-orange-700">
        <h1 className="text-white font-medium ">helllo how are you?</h1>
      </div> */}
    </>
  );
}

export default App;
