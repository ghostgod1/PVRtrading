import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./routes/Home.js";
import Courses from "./routes/Courses.js";
import Blogs from "./routes/Blogs.js";
import About from "./routes/About.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses />}/>
        <Route path="/blog" element={<Blogs />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    
    </div>
  );
}


